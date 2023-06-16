<template>
  <div
    class="my-1 px-1 w-screen md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex justify-center"
  >
    <router-link :to="`/movies/${id}`">
      <div
        class="relative h-96 w-80 rounded-2xl p-6 duration-300 hover:rotate-0"
      >
        <section
          class="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform rounded-2xl bg-gray-400"
        ></section>

        <section
          class="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0"
        >
          <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-gray-900"></div>
          </div>

          <header class="text-center text-xl font-extrabold text-gray-600">
            {{ media_type }}
          </header>

          <div>
            <p
              :class="`${
                title.length > 20 ? 'text-2xl' : 'text-4xl'
              } text-center font-extrabold text-gray-900`"
            >
              {{ title }}
            </p>
            <p class="text-center text-xl font-extrabold text-[#FE5401]">
              {{ date }}
            </p>
          </div>

          <footer class="mb-10 flex justify-center">
            <img
              :src="
                image === null
                  ? 'https://via.placeholder.com/300x300'
                  : `https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`
              "
              alt=""
              style="object-fit: cover; object-position: center"
              class="h-20 w-20 rounded-full hover:rounded hover:w-full hover:h-24 transition duration-300 ease-in-out"
            />
          </footer>
        </section>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: "No title provided",
    },
    description: {
      type: String,
      required: false,
      default: "No description provided",
    },
    date: {
      type: String,
      required: false,
    },
    media_type: {
      type: String,
      required: false,
    },
  },
};
</script>

<style></style>
