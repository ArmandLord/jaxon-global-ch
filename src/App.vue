<template>
  <layout-movie>
    <router-view />
  </layout-movie>
</template>

<script>
import LayoutMovie from "./components/layout/LayoutMovie.vue";

export default {
  components: { LayoutMovie },
  name: "App",
};
</script>

<style scoped></style>
