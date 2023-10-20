<template>
<!-- Main header component -->
  <div :class="['header container-fluid', { 'rtl': isRTL }]">
    <!-- Logo and main navigation area -->
    <div class="row align-items-center">
      <!-- Logo area -->
      <div class="col logo-col">
        <router-link to="/">
          <img class="logo" src="@/assets/GP_Logo.svg" alt="Logo" />
        </router-link>
      </div>
      <!-- Desktop-navigation -->
      <div class="col-auto desktop-menu">
        <nav>
          <router-link to="/faq-page" class="menu-item">FAQs</router-link>
          <router-link to="/contact-us" class="menu-item"
            >Contact Us</router-link
          >
          <router-link to="/our-vision" class="menu-item"
            >Our Vision</router-link
          >
        </nav>
      </div>
      <!-- Hamburger-menu for mobile view -->
      <div class="col-auto mobile-menu">
        <div class="hamburger" @click="toggleMenu">
          <img
            :class="{ 'rotated': isMenuOpen }"
            src="@/assets/hamburger.svg"
            alt="Menu"
          />
        </div>
      </div>
    </div>
    <!-- Fly-out menu for mobile menu -->
    <div :class="['flyout-menu', { 'menu-open': isMenuOpen }]">
      <router-link to="/faq-page" class="menu-item" @click="isMenuOpen = false"
        >FAQ</router-link
      >
      <router-link
        to="/contact-us"
        class="menu-item"
        @click="isMenuOpen = false"
        >Contact Us</router-link
      >
      <router-link
        to="/our-vision"
        class="menu-item"
        @click="isMenuOpen = false"
        >Our Vision</router-link
      >
      <!-- Close icon for the fly-out menu -->
      <div class="hamburger" @click="toggleMenu">
        <img
          :class="{ 'rotated': isMenuOpen }"
          src="@/assets/hamburger.svg"
          alt="Menu"
        />
      </div>
    </div>
  </div>
   <!-- responsive header transition -->
  <img
      src="@/assets/greenPath_headerTransition.svg"
      alt="Header Transition"
      class="header-transition"
    />
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  // Checking the user language and adjusting RTL if required
  computed: {
    isRTL() {
      const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
      const userLanguage = navigator.language.split('-')[0];
      return rtlLanguages.includes(userLanguage);
    }
  },
  methods: {
    // Switching the menu stage (open/closed)
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    // Navigate to a link and close the menu
    linkClicked(navigate) {
      this.toggleMenu();
      navigate();
    }
  }
};
</script>

<style scoped src="@/assets/styles/header.css"></style>
