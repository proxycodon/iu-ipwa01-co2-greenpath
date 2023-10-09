<template>
  <div :class="['header container-fluid', { 'rtl': isRTL }]">
    <div class="row align-items-center">
      <div class="col logo-col">
        <router-link to="/">
          <img class="logo" src="@/assets/GP_Logo.svg" alt="Logo">
        </router-link>
      </div>
      <div class="col-auto desktop-menu">
        <nav>
          <router-link to="/faq-page" class="menu-item">FAQ</router-link>
          <router-link to="/contact-us" class="menu-item">Contact Us</router-link>
          <router-link to="/our-vision" class="menu-item">Our Vision</router-link>
        </nav>
      </div>
      <!-- Hamburger menu for mobile view -->
      <div class="col-auto mobile-menu">
        <div class="hamburger" @click="toggleMenu">
          <img :class="{ 'rotated': isMenuOpen }" src="@/assets/hamburger.svg" alt="Menu">
        </div>
      </div>
    </div>
    <div :class="['flyout-menu', { 'menu-open': isMenuOpen }]">
      <router-link to="/faq-page" class="menu-item" @click="isMenuOpen = false">FAQ</router-link>
      <router-link to="/contact-us" class="menu-item" @click="isMenuOpen = false">Contact Us</router-link>
      <router-link to="/our-vision" class="menu-item" @click="isMenuOpen = false">Our Vision</router-link>
      <div class="hamburger" @click="toggleMenu">
        <img :class="{ 'rotated': isMenuOpen }" src="@/assets/hamburger.svg" alt="Menu">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  //check user writing culture and adjust rtl 
  computed: {
    isRTL() {
      const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
      const userLanguage = navigator.language.split('-')[0];
      return rtlLanguages.includes(userLanguage);
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    linkClicked(navigate) {
      this.toggleMenu();
      navigate();
    }
  }
};
</script>


<style scoped src="@/assets/styles/header.css"></style>
