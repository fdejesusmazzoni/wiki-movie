import { BaseAction } from '../../common/actions/baseAction';
import { commonActionTypes } from '../constants';
import { MoviesPaginator } from '../../model';

export const loadPopularMoviesAction = (): BaseAction => ({
  type: commonActionTypes.LOAD_POPULAR_MOVIES_REQUEST,
  payload: null,
});

export const loadPopularMoviesErrorAction = (error: string): BaseAction => ({
  type: commonActionTypes.LOAD_POPULAR_MOVIES_FAILURE,
  payload: error,
});

export const loadPopularMoviesSuccessAction = (movies: MoviesPaginator): BaseAction<MoviesPaginator> => ({
  type: commonActionTypes.LOAD_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});