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
