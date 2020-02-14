import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  '@global': {
    html: {
      overflow: 'hidden', 
    },
  },
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));
