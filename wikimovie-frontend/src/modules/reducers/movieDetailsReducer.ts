import { BaseAction } from '../../common/actions/baseAction';
import { MovieDetails, createDefaultMovieDetials } from '../../model';
import { commonActionTypes } from '../constants';

export const movieDetailsReducer = (
  state = createDefaultMovieDetials(),
  action: BaseAction
): MovieDetails => {
  switch (action.type) {
    case commonActionTypes.LOAD_MOVIE_DETAILS_SUCCESS:
      return handleLoadMovieDetailsSuccess(state, action.payload);
    case commonActionTypes.LOAD_MOVIE_DETAILS_FAILURE:
    default:
      return state;
  }
};

const handleLoadMovieDetailsSuccess = (_state: MovieDetails, movieDetails: MovieDetails): MovieDetails => (
  movieDetails
);