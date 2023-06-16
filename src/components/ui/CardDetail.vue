<template>
  <div class="mx-auto p-2 lg:p-48">
    <div
      class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
      style="min-height: 19rem"
    >
      <div
        class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
        style="min-height: 19rem"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover object-center"
          :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
          alt=""
        />
        <div
          class="absolute inset-0 w-full h-full bg-indigo-900 opacity-40"
        ></div>
        <div
          class="font-bold absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white"
        >
          {{ movie.title }}
        </div>
      </div>
      <div
        class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg"
      >
        <div class="p-8 md:pr-24 md:pl-16 md:py-12">
          <p class="text-gray-600">
            {{ movie.overview }}
          </p>
          <p class="text-gray-600 pt-5">
            Release date:
            <b>
              {{ movie.release_date || movie.first_air_date }}
            </b>
          </p>
        </div>

        <svg
          class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetail",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
