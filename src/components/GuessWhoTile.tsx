import React, { useContext } from 'react';
import { Box, Card, Grid } from '@material-ui/core';
import { useStyles } from '../styles/GuessWhoStyle';
import { guessWhoDispatch } from './contexts/GuessWhoContext';
export interface GuessWhoTileProps {
  name: string;
  imageURL: string;
  index: number;
  isEliminated: boolean;
}

const GuessWhoTile: React.SFC<GuessWhoTileProps> = ({
  imageURL,
  index,
  name,
  isEliminated,
}) => {
  const styles = useStyles();
  const dispatch = useContext(guessWhoDispatch);
  return (
    <div
      onClick={() => {
        dispatch({ type: 'TOGGLE_TILE', index });
      }}
    >
      <Grid container item direction="column" alignItems="center" xs={3}>
        <>{name}</>
        <Card variant="outlined">
          <div
            style={{
              background: `url(${imageURL})`,
              opacity: isEliminated ? '0.5' : '1',
              backgroundSize: 'cover',
            }}
            className={styles.tileImage}
          ></div>
        </Card>
      </Grid>
    </div>
  );
};

export default GuessWhoTile;
