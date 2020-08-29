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
    <Grid container item direction="column" alignItems="center" xs={4} md={2}>
      <>{name}</>
      <div
        onClick={() => {
          dispatch({ type: 'TOGGLE_TILE', index });
        }}
        style={{ width: '100%' }}
      >
        <Card variant="elevation" style={{ backgroundColor: 'red' }}>
          <div
            style={{
              background: `url(${imageURL})`,
              opacity: isEliminated ? '0.5' : '1',
              backgroundSize: 'cover',
            }}
            className={styles.tileImage}
          ></div>
        </Card>
      </div>
    </Grid>
  );
};

export default GuessWhoTile;
