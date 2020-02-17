import { connect } from 'react-redux';
import { ReduxState } from '../../../store/reduxState';
import { MovieView } from './MovieView';
import { BaseAction } from '../../../common/actions/baseAction';
import { loadMovieDetailsAction } from '../../../modules/actions';
import { Dispatch } from 'redux';
import { selectMovieDetails } from '../../../modules/selectors';

const mapStateToProps = (state: ReduxState) => ({
  movieDetails: selectMovieDetails(state),
});

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => ({
  loadMovieDetails: (movieId: number) => {
    dispatch(loadMovieDetailsAction(movieId)); 
  },
});

export const MovieViewContainer = connect(mapStateToProps, mapDispatchToProps)(MovieView);