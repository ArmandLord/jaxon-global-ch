export const setMovies = (state, movies) => {
  state.movies = [...state.movies, ...movies];
};

export const setMovieDetails = (state, movie) => {
  state.movieDetails = movie;
};
