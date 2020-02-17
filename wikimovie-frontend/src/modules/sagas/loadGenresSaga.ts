import { put, call } from 'redux-saga/effects';
import { genreAPI } from '../../api/rest/genreApi';
import { Genre } from '../../model';
import { loadGeneresSuccessAction, loadGeneresErrorAction } from '../actions';
import i18n from '../../i18n';
import { toast } from 'react-toastify';

export function* loadGenresSaga() {
  try {
    const genres: Genre[] = yield call(genreAPI.getGenres);
    
    yield put(loadGeneresSuccessAction(genres));
  } catch (error) {
    const errorMsg = i18n.t(error);
    yield put(loadGeneresErrorAction(errorMsg));
    toast.error(errorMsg);
  }
}