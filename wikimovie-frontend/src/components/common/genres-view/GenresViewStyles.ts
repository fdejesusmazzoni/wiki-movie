import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));