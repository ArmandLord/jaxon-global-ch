<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <Card
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :image="movie.poster_path"
        :title="movie.original_name || movie.title || movie.name"
        :description="movie.overview"
        :date="movie.release_date || movie.first_air_date"
        :media_type="movie.media_type"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "CardList",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
