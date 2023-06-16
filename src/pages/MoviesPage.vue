<template>
  <div v-if="movies.length === 0">
    <LoadingIcon />
  </div>
  <div v-else>
    <SearchBar @keyup.enter="search" :search="search" />
    <CardList :movies="movies" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import CardList from "../components/ui/CardList.vue";
import LoadingIcon from "../components/ui/LoadingIcon.vue";
import SearchBar from "../components/ui/SearchBar.vue";

export default {
  components: { CardList, LoadingIcon, SearchBar },
  name: "MoviesPage",
  setup() {
    const store = useStore();
    const movies = ref([]);

    onMounted(() => {
      store.dispatch("moviesModule/loadMovies");
    });

    store.watch(
      (state) => state.moviesModule.movies,
      (newMovies) => {
        if (newMovies === null) {
          alert("We couldn't find the movie you're looking for");
          return;
        }
        movies.value = newMovies;
      }
    );

    const search = (event) => {
      const value = event.target.value;
      store.dispatch("moviesModule/searchMovies", value);
    };

    return {
      movies,
      search,
    };
  },
};
</script>

<style></style>
