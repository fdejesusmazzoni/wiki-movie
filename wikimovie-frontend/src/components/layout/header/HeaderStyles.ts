import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../constants';

export const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 16, // keep right padding when drawer closed
    color: '#fff',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 16,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 40,
    margin: 2,
  },
  userContainer: {
    paddingLeft: 8,
  },
  logoContainer: {
    overflow: 'hidden',
    marginRight: 12,
  },
}));
