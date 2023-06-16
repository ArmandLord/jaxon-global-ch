<template>
  <div v-if="movies.length === 0">
    <LoadingIcon />
  </div>
  <div v-else>
    <SearchBar @keyup.enter="search" :search="search" />
    <div
      class="flex items-center justify-center max-w-md mx-auto bg-trasnparent rounded-lg"
    >
      <button
        class="bg-yellow-500 w-[257px] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        @click="clear"
      >
        Clear
      </button>
    </div>
    <div
      class="flex flex-col items-center max-w-md mx-auto bg-trasnparent rounded-lg pt-3"
    >
      <label
        class="text-white flex font-bold py-2 rounded items-start w-[257px]"
        >Filter by year</label
      >
      <select
        class="bg-white w-[257px] text-black font-bold py-2 px-4 rounded"
        @change="filterByYear"
      >
        <option value="all">All</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>

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

    const clear = () => {
      console.log("clear");
      store.dispatch("moviesModule/clearMovies");
    };

    const search = (event) => {
      const value = event.target.value;
      store.dispatch("moviesModule/searchMovies", value);
    };

    const filterByYear = (event) => {
      const value = event.target.value;
      store.dispatch("moviesModule/filterByReleaseDate", value);
    };

    return {
      movies,
      search,
      clear,
      filterByYear,
    };
  },
};
</script>

<style></style>
