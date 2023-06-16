export const setMovies = (state, movies) => {
  state.movies = [...state.movies, ...movies];
};

export const setMovieDetails = (state, movie) => {
  state.movieDetails = movie;
};

export const setMoviesSearch = (state, movies) => {
  state.movies = movies;
};
