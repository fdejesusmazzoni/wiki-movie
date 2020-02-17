import { takeLatest, all, fork, takeEvery } from 'redux-saga/effects';
import { isDevelopmentMode } from '../../common/util/isDevMode';
import { commonActionTypes } from '../constants';
import { loadGenresSaga } from './loadGenresSaga';
import { loadPopularMoviesSaga } from './loadPopularMoviesSaga';
import { searchMoviesSaga } from './searchMoviesSaga';
import { loadMovieDetailsSaga } from './loadMovieDetailsSaga';

function* watchAll() {
  yield takeEvery('*', function logger(action: Object) {
    // tslint:disable-next-line:no-console
    console.log(action);
    return null;
  });
}

function* watchLoadMovieDetailsSaga() {
  yield takeLatest(commonActionTypes.LOAD_MOVIE_DETAILS_REQUEST, loadMovieDetailsSaga);
}

function* watchLoadGenresSaga() {
  yield takeLatest(commonActionTypes.LOAD_GENRES_REQUEST, loadGenresSaga);
}

function* watchLoadPopularMoviesSaga() {
  yield takeLatest(commonActionTypes.LOAD_POPULAR_MOVIES_REQUEST, loadPopularMoviesSaga);
}

function* watchSearchMoviesSaga() {
  yield takeLatest(commonActionTypes.SEARCH_MOVIES_REQUEST, searchMoviesSaga);
}

function getForks() {
  const forks = [
    fork(watchLoadGenresSaga),
    fork(watchLoadPopularMoviesSaga),
    fork(watchSearchMoviesSaga),
    fork(watchLoadMovieDetailsSaga),
  ];
  
  if (isDevelopmentMode()) {
    forks.push(fork(watchAll));
  }
  
  return forks;
}

export default function* rootSaga() {
  yield all(getForks());
}