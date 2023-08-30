<template>
  <div id="app">
    <HeaderComponent />
    <img src="@/assets/greenPath_headerTransition.svg" alt="Header Transition" class="header-transition">
    <img src="@/assets/footerTransition.svg" alt="Footer Transition" class="footer-transition">

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>