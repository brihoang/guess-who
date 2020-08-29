import React, { useReducer, createContext } from 'react';

export interface GuessWhoContextProps {}

export interface GuessWhoTile {
  name: string;
  imageURL: string;
  isEliminated: boolean;
}

export interface GuessWhoContextType {
  tiles: Array<GuessWhoTile>;
  submittedRounds: Array<{
    hint: string;
    tiles: Array<GuessWhoTile & { index: number }>;
  }>;
  eliminatedIndices: Array<number>;
}

export type GuessWhoAction =
  | { type: 'TOGGLE_TILE'; index: number }
  | { type: 'SUBMIT_ROUND'; hint: string };

interface ProviderProps {
  children: React.ReactNode;
  initialValues: GuessWhoContextType;
}

const guessWhoState = createContext<GuessWhoContextType>({
  tiles: [],
  submittedRounds: [],
  eliminatedIndices: [],
});
const guessWhoDispatch = createContext<(arg0: GuessWhoAction) => void>(
  () => {}
);

const { Provider: StateProvider } = guessWhoState;
const { Provider: DispatchProvider } = guessWhoDispatch;

const GuessWhoStateProvider: React.FC<ProviderProps> = ({
  children,
  initialValues,
}) => {
  const reducer = (state: GuessWhoContextType, action: GuessWhoAction) => {
    switch (action.type) {
      case 'TOGGLE_TILE':
        const { index } = action;
        return {
          ...state,
          tiles: state.tiles.map((tile, mapIndex) =>
            mapIndex === index
              ? { ...tile, isEliminated: !tile.isEliminated }
              : tile
          ),
        };

      case 'SUBMIT_ROUND':
        const newTiles = state.tiles
          .map((tile, index) => ({ ...tile, index }))
          .filter(({ isEliminated }) => isEliminated);

        if (newTiles.length === 0) {
          return state;
        }
        return {
          ...state,
          submittedRounds: [
            {
              hint:
                action.hint.length > 0
                  ? action.hint
                  : `Eliminated in round ${state.submittedRounds.length + 1}`,
              tiles: newTiles,
            },
            ...state.submittedRounds,
          ],
          tiles: state.tiles.map((tile) => ({ ...tile, isEliminated: false })),
          eliminatedIndices: [
            ...state.eliminatedIndices,
            ...newTiles.map(({ index }) => index),
          ],
        };

      default:
        return state;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, { ...initialValues });

  return (
    <StateProvider value={state}>
      <DispatchProvider value={dispatch}>{children}</DispatchProvider>
    </StateProvider>
  );
};

export { GuessWhoStateProvider, guessWhoDispatch, guessWhoState };
