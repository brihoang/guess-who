import React, { useContext } from 'react';
import { guessWhoState, guessWhoDispatch } from './contexts/GuessWhoContext';
import GuessWhoTile from './GuessWhoTile';
import { Grid, TextField, Button, Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';

export interface GuessWhoContentsProps {}

const GuessWhoContents: React.FC<GuessWhoContentsProps> = () => {
  const { tiles, eliminatedIndices, submittedRounds } = useContext(
    guessWhoState
  );
  const dispatch = useContext(guessWhoDispatch);

  return (
    <div>
      <Formik
        initialValues={{ hint: '' }}
        onSubmit={({ hint }, actions) => {
          dispatch({ type: 'SUBMIT_ROUND', hint });
          actions.resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <Field
                as={TextField}
                name="hint"
                type="input"
                placeholder="Enter Hint"
                style={{ width: '50%' }}
              />

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
      <Grid container spacing={2} direction="row">
        {tiles
          .map((tile, index) => ({ ...tile, index }))
          .filter(({ index }) => !eliminatedIndices.includes(index))
          .map((tile) => (
            <GuessWhoTile {...tile} key={tile.index} />
          ))}
      </Grid>
      <Box pt={30}>
        {submittedRounds.map(({ hint, tiles }) => (
          <>
            <h3>{hint}</h3>
            <Grid container spacing={2} direction="row">
              {tiles.map((tile) => (
                <GuessWhoTile {...tile} isEliminated={false} key={tile.index} />
              ))}
            </Grid>
          </>
        ))}
      </Box>
    </div>
  );
};

export default GuessWhoContents;
