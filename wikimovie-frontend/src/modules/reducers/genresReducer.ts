import { BaseAction } from '../../common/actions/baseAction';
import { createDefaultGenres, Genre } from '../../model';

export const genresReducer = (
  state = createDefaultGenres(),
  action: BaseAction
): Genre[] => {
  return [];
};