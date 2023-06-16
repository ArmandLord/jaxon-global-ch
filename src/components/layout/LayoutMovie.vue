<template>
  <div class="bg-gray-800">
    <Navbar />
    <div class="container mx-auto">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../ui/Navbar.vue";
import Footer from "../ui/Footer.vue";

export default { components: { Navbar, Footer } };
</script>

<style></style>
