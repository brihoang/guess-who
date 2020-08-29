import React from 'react';
import {
  GuessWhoStateProvider,
  GuessWhoContextType,
} from './contexts/GuessWhoContext';
import GuessWhoContents from './GuessWhoContents';
import { ThemeProvider } from '@material-ui/core';

export interface GuessWhoProps {}

const MOCK_DATA: GuessWhoContextType = {
  tiles: [
    {
      imageURL:
        'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/45019855_10213705798383975_7424390234344783872_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=KsxEgcM8UroAX9pG4_p&_nc_ht=scontent-sjc3-1.xx&oh=3da6c132f8f707c6984b9207b9572745&oe=5F700E15',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/55919092_10205804998961894_3601899225287229440_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=2Bsc8DvaJNsAX_a0e-w&_nc_ht=scontent-sjc3-1.xx&oh=27919f1b41fdd00193ed2c50e631cc69&oe=5F70D798',
      isEliminated: false,
      name: 'Keana',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
    {
      imageURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
      isEliminated: false,
      name: 'Katrina',
    },
  ],
  submittedRounds: [],
  eliminatedIndices: [],
};

const GuessWho: React.FC<GuessWhoProps> = () => {
  return (
    <GuessWhoStateProvider initialValues={MOCK_DATA}>
      {/* <ThemeProvider theme={{}}> */}
      <GuessWhoContents />
      {/* </ThemeProvider> */}
    </GuessWhoStateProvider>
  );
};

export default GuessWho;
