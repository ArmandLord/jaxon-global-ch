<template>
  <div v-if="movies.length === 0">
    <Loading />
  </div>
  <div v-else>
    <CardList :movies="movies" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import CardList from "../components/ui/CardList.vue";
import Loading from "../components/ui/Loading.vue";

export default {
  components: { CardList, Loading },
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
        movies.value = newMovies;
      }
    );

    return {
      movies,
    };
  },
};
</script>

<style></style>
