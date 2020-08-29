import React, { useContext } from 'react';
import { guessWhoState } from './contexts/GuessWhoContext';
import GuessWhoTile from './GuessWhoTile';
import { Grid } from '@material-ui/core';

export interface GuessWhoContentsProps {}

const GuessWhoContents: React.FC<GuessWhoContentsProps> = () => {
  const { tiles } = useContext(guessWhoState);
  return (
    <Grid container spacing={2} direction="row">
      {tiles.map((tile, index) => (
        <GuessWhoTile {...tile} index={index} key={index} />
      ))}
    </Grid>
  );
};

export default GuessWhoContents;
