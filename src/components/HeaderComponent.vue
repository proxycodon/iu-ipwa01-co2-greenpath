<template>
  <div class="header">
    <!-- Logo -->
    <img class="logo" src="@/assets/GP_Logo.svg" alt="Logo">

    <!-- Desktop Menu -->
    <div class="desktop-menu">
      <nav>
        <a href="#" class="menu-item">FAQ</a>
        <a href="#" class="menu-item">Contact Us</a>
        <a href="#" class="menu-item">Our Vison</a>
      </nav>
    </div>

    <!-- Mobile Menu (Hamburger Icon) -->
    <div class="mobile-menu">
      <div class="hamburger" @click="toggleMenu">
        <img :class="{ 'rotated': isMenuOpen }" src="@/assets/hamburger.svg" alt="Menu">
      </div>
    </div>

    <!-- Flyout Menu -->
    <div :class="['flyout-menu', { 'menu-open': isMenuOpen }]">
      <a href="#" class="menu-item">FAQ</a>
      <a href="#" class="menu-item">Contact Us</a>
      <a href="#" class="menu-item">Our Vision</a>
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
