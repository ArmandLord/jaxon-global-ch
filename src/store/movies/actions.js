import moviesApi from "../../api/moviesApi";

const key = import.meta.env.VITE_MOVIE_API_KEY;

export const loadMovies = async ({ commit }) => {
  const { data } = await moviesApi.get(`/trending/all/day?api_key=${key}`);

  commit("setMovies", data.results);
};

export const loadMovieDetails = async ({ commit }, id) => {
  const { data } = await moviesApi.get(`/movie/${id}?api_key=${key}`);

  commit("setMovieDetails", data);
};

export const searchMovies = async ({ commit }, query) => {
  if (!query) return;

  const { data } = await moviesApi.get(
    `/search/movie?api_key=${key}&query=${query}`
  );

  if (data.results.length === 0) {
    commit("setMoviesSearch", null);
    return;
  }

  commit("setMoviesSearch", data.results);
};
