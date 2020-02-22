import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  divPaper: {
    width: '100%',
  },
  paper: {
   margin: '0 auto',
   padding: 10,
   display: 'flex',
   overflow: 'auto',
   flexWrap: 'wrap',
   height: '75vh',
   maxWidth: 1250,
  },
  movieData: {
    padding: 20,
    width: '100%'
  },
  movieImage: {
    margin: '0px auto',
    width: 'fit-content'
  },
  overview : {
    minHeight: '35vh'
  },
  productionCompany: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
      maxWidth: 100,
      height: 'auto',
    },
  },
  alignRight: {
    float: 'right'
  },
  informationTitle: {
    margin: 0,
  },
  information: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 15,
  }
}));