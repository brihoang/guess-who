import React, { useReducer, createContext } from 'react';

export interface GuessWhoContextProps {}

export interface GuessWhoTile {
  name: string;
  imageURL: string;
  isEliminated: boolean;
}

export interface GuessWhoContextType {
  tiles: Array<GuessWhoTile>;
}

export type GuessWhoAction = { type: 'TOGGLE_TILE'; index: number };

interface ProviderProps {
  children: React.ReactNode;
  initialValues: GuessWhoContextType;
}

const guessWhoState = createContext<GuessWhoContextType>({ tiles: [] });
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
          tiles: state.tiles.map((tile, mapIndex) =>
            mapIndex === index
              ? { ...tile, isEliminated: !tile.isEliminated }
              : tile
          ),
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
