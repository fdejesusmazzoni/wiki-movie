const apiPrefix = '/3';

export const apiRoutes = { 
  genres: {
    get: `${apiPrefix}/genre/movie/list?api_key={apikey}`,
  },
  movies: {
    get: `${apiPrefix}/movie/popular?api_key={apikey}&page={page}`,
    search: `${apiPrefix}/search/movie?api_key={apikey}&query={searchTitle}&page={page}&include_adult=false`,
    details: `${apiPrefix}/movie/{movieId}?api_key={apikey}`,
  },
};

export const baseApiDev = 'https://api.themoviedb.org';
export const baseApiProd = 'https://api.themoviedb.org/';

export const apiGenreErrorMessages = {
  errorLoading: 'There was an error loading the genres list. Please try again later',
};

export const apiMovieErrorMessages = {
  errorLoading: 'There was an error loading the movies list. Please try again later',
  errorDetailLoading: 'There was an error loading the movie details. Please try again later',
};