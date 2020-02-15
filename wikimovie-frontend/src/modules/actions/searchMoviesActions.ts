import { BaseAction } from '../../common/actions/baseAction';
import { commonActionTypes } from '../constants';
import { MoviesPaginator } from '../../model';

export const searchMoviesAction = (): BaseAction => ({
  type: commonActionTypes.SEARCH_MOVIES_REQUEST,
  payload: null,
});

export const searchMoviesErrorAction = (error: string): BaseAction => ({
  type: commonActionTypes.SEARCH_MOVIES_FAILURE,
  payload: error,
});

export const searchMoviesSuccessAction = (movies: MoviesPaginator): BaseAction<MoviesPaginator> => ({
  type: commonActionTypes.SEARCH_MOVIES_SUCCESS,
  payload: movies,
});