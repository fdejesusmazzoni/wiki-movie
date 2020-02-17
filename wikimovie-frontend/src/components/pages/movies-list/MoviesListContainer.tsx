import { connect } from 'react-redux';
import { ReduxState } from '../../../store/reduxState';
import { MoviesList } from './MoviesList';
import { BaseAction } from '../../../common/actions/baseAction';
import { loadGenresAction, loadPopularMoviesAction, searchMoviesAction } from '../../../modules/actions';
import { Dispatch } from 'redux';
import { selectGenres, selectMovies } from '../../../modules/selectors';

const mapStateToProps = (state: ReduxState) => ({
  genres: selectGenres(state),
  movies: selectMovies(state),
});

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => ({
  loadGenres: () => {
    dispatch(loadGenresAction()); 
  },
  loadPopularMovies: (page: number) => {
    dispatch(loadPopularMoviesAction(page)); 
  },
  searchMovies: (page: number, searchTitle: string) => {
    dispatch(searchMoviesAction(page, searchTitle)); 
  },
});

export const MoviesListContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesList);