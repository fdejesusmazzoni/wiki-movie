import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  voteGrid: {
    width: '50%',
    margin: 'auto',
  },
  vote: {
    float: 'right',
  },
  votePositive: {
    color: 'green',
    fontSize: 'x-large'
  },
  voteNeutral: {
    color: 'orange',
    fontSize: 'x-large'
  },
  voteNegative: {
    color: 'red',
    fontSize: 'x-large'
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));
