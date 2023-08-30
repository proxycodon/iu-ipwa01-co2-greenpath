<template>
  <div class="header container-fluid">
    <div class="row align-items-center">
      <div class="col">
        <img class="logo" src="@/assets/GP_Logo.svg" alt="Logo">
      </div>
      <div class="col-auto desktop-menu">
        <nav>
          <a href="#" class="menu-item">FAQ</a>
          <a href="#" class="menu-item">Contact Us</a>
          <a href="#" class="menu-item">Our Vison</a>
        </nav>
      </div>
      <div class="col-auto mobile-menu">
        <div class="hamburger" @click="toggleMenu">
          <img :class="{ 'rotated': isMenuOpen }" src="@/assets/hamburger.svg" alt="Menu">
        </div>
      </div>
    </div>

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
