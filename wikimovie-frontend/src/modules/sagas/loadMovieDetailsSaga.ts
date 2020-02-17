import { put, call } from 'redux-saga/effects';
import { movieAPI } from '../../api/rest/movieApi';
import { MovieDetails } from '../../model';
import { loadMovieDetailsSuccessAction, loadMovieDetailsErrorAction } from '../actions';
import i18n from '../../i18n';
import { toast } from 'react-toastify';
import { BaseAction } from '../../common/actions/baseAction';

export function* loadMovieDetailsSaga(action: BaseAction<number>) {
  try {
    const movieDetail: MovieDetails = yield call(movieAPI.getMovieDetails, action.payload);
    
    yield put(loadMovieDetailsSuccessAction(movieDetail));
  } catch (error) {
    const errorMsg = i18n.t(error);
    yield put(loadMovieDetailsErrorAction(errorMsg));
    toast.error(errorMsg);
  }
}