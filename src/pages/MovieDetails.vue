<template>
  <div class="w-full">
    <CardDetail :movie="movie" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import CardDetail from "../components/ui/CardDetail.vue";

export default {
  name: "MovieDetails",
  setup() {
    const route = useRoute();
    const store = useStore();
    const movieId = route.params.id;
    const movie = ref({});
    onMounted(() => {
      store.dispatch("moviesModule/loadMovieDetails", movieId);
    });
    store.watch(
      (state) => state.moviesModule.movieDetails,
      (newMovieDetails) => {
        movie.value = newMovieDetails;
      }
    );
    return {
      movie,
    };
  },
  components: { CardDetail },
};
</script>

<style></style>
