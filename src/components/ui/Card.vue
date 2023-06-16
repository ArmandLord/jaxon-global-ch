<template>
  <!-- component -->
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

          <!-- year.month.day -->
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
            <!-- <button
              class="flex items-center rounded-lg bg-[#FF7308] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#E56707]"
            >
              <p>Start</p>
              <svg
                class="h-9 w-9"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button> -->
            <img
              :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`"
              alt=""
              style="object-fit: cover; object-position: center"
              class="h-20 w-20 rounded-full hover:rounded hover:w-full hover:h-24 transition duration-300 ease-in-out"
            />
          </footer>
        </section>
      </div>
    </router-link>
  </div>

  <!-- <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <router-link :to="`/movies/${id}`">
      <article class="overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Placeholder"
          class="block h-[400px] w-full"
          style="object-fit: cover; object-position: center"
          :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`"
        />

        <header
          class="flex items-center justify-between leading-tight p-2 md:p-4"
        >
          <h1 class="text-lg">
            <p class="no-underline hover:underline text-black" href="#">
              {{ title }}
            </p>
          </h1>
          <p class="text-grey-darker text-sm">
            {{ date }}
          </p>
        </header>

        <footer
          class="flex items-center justify-between leading-none p-2 md:p-4"
        >
          {{ description }}
        </footer>
      </article>
    </router-link>
  </div> -->
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
