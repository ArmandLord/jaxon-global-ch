<template>
  <div class="flex items-center justify-center p-5">
    <div class="flex items-center max-w-md mx-auto bg-white rounded-lg">
      <div class="w-full">
        <input
          type="search"
          class="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
          placeholder="Search"
          @input="$emit('update:search', $event.target.value)"
        />
      </div>
      <div>
        <button
          type="submit"
          class="flex items-center bg-white justify-center w-12 h-12 text-white rounded-r-lg"
          disabled
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    search: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style></style>
