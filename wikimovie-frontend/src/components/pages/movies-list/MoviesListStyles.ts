import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
   padding: 10,
   display: 'flex',
   overflow: 'auto',
   flexWrap: 'wrap',
   height: '75vh',
  },
  movieCard: {
    flexDirection: 'column',
    width: 345,
    margin: '10px auto',
    maxHeight: 400,
  },
  paginationDiv: {
    width: '100%',
    overflow: 'auto',
  },
  pagination: {
    float: 'right',
  }
}));