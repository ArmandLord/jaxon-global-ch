<template>
  <div class="bg-gray-800">
    <Navbar />
    <div class="container mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from "../ui/Navbar.vue";

export default { components: { Navbar } };
</script>

<style></style>
