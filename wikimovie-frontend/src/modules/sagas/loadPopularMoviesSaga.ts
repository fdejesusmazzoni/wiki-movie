import { put, call } from 'redux-saga/effects';
import { movieAPI } from '../../api/rest/movieApi';
import { MoviesPaginator } from '../../model';
import { loadPopularMoviesSuccessAction, loadPopularMoviesErrorAction } from '../actions';
import i18n from '../../i18n';
import { toast } from 'react-toastify';
import { BaseAction } from '../../common/actions/baseAction';

export function* loadPopularMoviesSaga(action: BaseAction<number>) {
  try {
    const movies: MoviesPaginator = yield call(movieAPI.getPopularMovies, action.payload);
    
    yield put(loadPopularMoviesSuccessAction(movies));
  } catch (error) {
    const errorMsg = i18n.t(error);
    yield put(loadPopularMoviesErrorAction(errorMsg));
    toast.error(errorMsg);
  }
}