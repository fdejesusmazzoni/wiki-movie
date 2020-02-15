const apiPrefix = '/3';

export const apiRoutes = { 
  genres: {
    get: `${apiPrefix}/genre/movie/list?api_key={apikey}`,
  },
};

export const baseApiDev = 'https://api.themoviedb.org';
export const baseApiProd = 'https://api.themoviedb.org/';

export const apiGenreErrorMessages = {
  errorLoading: 'There was an error loading the genres list. Please try again later',
};

export const apikey = 'a5ab780b7af501a62581e2e9d25c8815';