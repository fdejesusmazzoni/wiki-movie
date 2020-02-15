import { BaseAction } from '../../common/actions/baseAction';
import { createDefaultGenres, Genre } from '../../model';
import { commonActionTypes } from '../constants';

export const genresReducer = (
  state = createDefaultGenres(),
  action: BaseAction
): Genre[] => {
  switch (action.type) {
    case commonActionTypes.LOAD_GENRES_SUCCESS:
      return handleLoadGenresSuccess(state, action.payload);
    case commonActionTypes.LOAD_GENRES_FAILURE:
    default:
      return state;
  }
};

const handleLoadGenresSuccess = (_state: Genre[], genres: Genre[]): Genre[] => (
  genres
);