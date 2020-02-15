import { connect } from 'react-redux';
import { ReduxState } from '../../../store/reduxState';
import { MoviesList } from './MoviesList';
import { BaseAction } from '../../../common/actions/baseAction';
import { loadGenresAction } from '../../../modules/actions';
import { Dispatch } from 'redux';
import { selectGenres } from '../../../modules/selectors';

const mapStateToProps = (state: ReduxState) => ({
  genres: selectGenres(state),
});

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => ({
  loadGenres: () => {
    dispatch(loadGenresAction()); 
  },
});

export const MoviesListContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesList);