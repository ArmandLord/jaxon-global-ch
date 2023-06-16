import { createStore } from "vuex";
import moviesModule from "./movies/";

const store = createStore({
  modules: {
    moviesModule,
  },
});

export default store;
