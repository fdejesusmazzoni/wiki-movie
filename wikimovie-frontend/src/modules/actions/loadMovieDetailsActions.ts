import { BaseAction } from '../../common/actions/baseAction';
import { commonActionTypes } from '../constants';
import { MovieDetails } from '../../model';

export const loadMovieDetailsAction = (movieId: number): BaseAction<number> => ({
  type: commonActionTypes.LOAD_MOVIE_DETAILS_REQUEST,
  payload: movieId,
});

export const loadMovieDetailsErrorAction = (error: string): BaseAction => ({
  type: commonActionTypes.LOAD_MOVIE_DETAILS_FAILURE,
  payload: error,
});

export const loadMovieDetailsSuccessAction = (movieDetails: MovieDetails): BaseAction<MovieDetails> => ({
  type: commonActionTypes.LOAD_MOVIE_DETAILS_SUCCESS,
  payload: movieDetails,
});