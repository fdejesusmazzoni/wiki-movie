import { BaseAction } from '../../common/actions/baseAction';
import { createDefaultMoviesPaginator, MoviesPaginator } from '../../model';
import { commonActionTypes } from '../constants';

export const moviesReducer = (
  state = createDefaultMoviesPaginator(),
  action: BaseAction
): MoviesPaginator => {
  switch (action.type) {
    case commonActionTypes.LOAD_POPULAR_MOVIES_SUCCESS:
      return handleMovieSuccess(state, action.payload);
    case commonActionTypes.LOAD_POPULAR_MOVIES_FAILURE:
      return state;
    case commonActionTypes.SEARCH_MOVIES_SUCCESS:
      return handleMovieSuccess(state, action.payload);
    case commonActionTypes.SEARCH_MOVIES_FAILURE:
      return state;
    default:
      return state;
  }
};

const handleMovieSuccess = (_state: MoviesPaginator, movies: MoviesPaginator): MoviesPaginator => (
  movies
);