import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tileImage: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '4px',
    width: 150,
    height: 150,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      height: '5rem',
    },
  },
}));
