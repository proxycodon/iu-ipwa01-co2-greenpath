<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <HeaderComponent />
    <img src="@/assets/greenPath_headerTransition.svg" alt="Header Transition" class="header-transition">
    <div class="content-flex-fill">
      <RouterView></RouterView>
    </div>
    <img src="@/assets/footerTransition.svg" alt="Footer Transition" class="footer-transition">
    <FooterComponent />
  </div>
</template>

<style scoped src="@/assets/styles/globalStyles.css"></style>