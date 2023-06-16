<template>
  <nav
    class="flex items-center justify-between flex-wrap py-6 px-[3rem] sticky top-0 z-50 bg-gray-900"
  >
    <div class="flex items-center flex-shrink-0 text-background-three mr-6">
      <router-link to="/">
        <span class="font-bold text-xl tracking-tight text-yellow-400">
          JX
        </span>
        <span class="font-bold text-xl tracking-tight text-[#FE5401]">
          M🍿VIES
        </span>
      </router-link>
    </div>
    <router-link v-if="isMoviesPage" to="/">
      <button
        class="flex items-center bg-white justify-center w-8 h-8 text-white rounded-md"
      >
        <svg
          class="w-5 h-5 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </button>
    </router-link>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Navbar",
  setup() {
    // si la ruta contiene /movies, entonces retornar true
    const route = useRoute();
    const isMoviesPage = computed(() => route.path.includes("/movies"));

    return {
      isMoviesPage,
    };
  },
};
</script>

<style></style>
