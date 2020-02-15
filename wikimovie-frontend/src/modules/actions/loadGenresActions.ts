import { BaseAction } from '../../common/actions/baseAction';
import { commonActionTypes } from '../constants';
import { Genre } from '../../model';

export const loadGenresAction = (): BaseAction => ({
  type: commonActionTypes.LOAD_GENRES_REQUEST,
  payload: null,
});

export const loadGeneresErrorAction = (error: string): BaseAction => ({
  type: commonActionTypes.LOAD_GENRES_FAILURE,
  payload: error,
});

export const loadGeneresSuccessAction = (genres: Genre[]): BaseAction<Genre[]> => ({
  type: commonActionTypes.LOAD_GENRES_SUCCESS,
  payload: genres,
});