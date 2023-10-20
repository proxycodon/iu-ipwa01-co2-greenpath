<script setup>
// Import main components for header and footer
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <HeaderComponent />
      <!-- View area where pages specified by the router are rendered -->
      <div class="content-flex-fill">
        <RouterView></RouterView>
      </div>
    <FooterComponent />
  </div>
</template>

<style scoped src="@/assets/styles/globalStyles.css"></style>
