<template>
  <div class="header container-fluid">
    <div class="row align-items-center">
      <div class="col">
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
      <div class="col-auto mobile-menu">
        <div class="hamburger" @click="toggleMenu">
          <img :class="{ 'rotated': isMenuOpen }" src="@/assets/hamburger.svg" alt="Menu">
        </div>
      </div>
    </div>

    <div :class="['flyout-menu', { 'menu-open': isMenuOpen }]">
      <router-link to="/faqpage" class="menu-item">FAQ</router-link>
       <router-link to="/contact-us" class="menu-item">Contact Us</router-link>
       <router-link to="/our-vision" class="menu-item">Our Vision</router-link>
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
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped src="@/assets/styles/header.css"></style>
