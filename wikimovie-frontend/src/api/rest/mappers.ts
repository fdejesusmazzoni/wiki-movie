import * as api from '../model';
import * as model from '../../model';

export const mapReturnLoadGenresToModel = (returnLoadGenres: api.ReturnLoadGenres): model.Genre[] => ([
  ...returnLoadGenres.genres,
]);