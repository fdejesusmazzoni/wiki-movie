import { BaseAction } from '../../common/actions/baseAction';
import { commonActionTypes } from '../constants';
import { MoviesPaginator, FilterMovie } from '../../model';

export const searchMoviesAction = (page: number, searchTitle: string): BaseAction<FilterMovie> => ({
  type: commonActionTypes.SEARCH_MOVIES_REQUEST,
  payload: {page, searchTitle},
});

export const searchMoviesErrorAction = (error: string): BaseAction => ({
  type: commonActionTypes.SEARCH_MOVIES_FAILURE,
  payload: error,
});

export const searchMoviesSuccessAction = (movies: MoviesPaginator): BaseAction<MoviesPaginator> => ({
  type: commonActionTypes.SEARCH_MOVIES_SUCCESS,
  payload: movies,
});