<template>
<!-- 
Test to identify language and validate RTL modifications
<div>Current language: {{ currentLanguage }}</div>
-->

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
    currentLanguage() {
        return navigator.language;
    },
    isRTL() {
        const rtlLanguages = ["ar", "arc", "dv", "fa", "ha", "he", "khw", "ks", "ku", "ps", "ur", "yi"];
        const userLanguage = this.currentLanguage.split('-')[0];
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

<style scoped>
.header {
  background-color: #344E41;
  padding: 20px;
  position: relative;
}

.logo {
  height: 50px;
}

.desktop-menu nav {
  display: flex;
  gap: 1rem;
}

.menu-item {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
  box-sizing: border-box;
  width: 150px;
  text-align: center;
}

.menu-item:hover {
  font-weight: bold;
}

.hamburger {
  display: none;
  width: 25px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.hamburger img {
  width: 100%;
  transition: transform 0.3s ease;
}

.hamburger img.rotated {
  transform: rotate(90deg);
}

.flyout-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background-color: #02311A;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 100;
}

.flyout-menu .hamburger {
  position: absolute;
  top: 20px;
  right: 20px;
}

.flyout-menu .menu-item {
  color: #E97908;
}

.menu-open {
  right: 0;
}

@media (max-width: 880px) {
  .desktop-menu {
    display: none;
  }
  .hamburger {
    display: block;
  }
}

/*for RTL UX*/
.rtl .logo-col {
  order: 1;
  text-align: right;
}

.rtl .desktop-menu nav {
  direction: rtl;
}

.rtl .mobile-menu .hamburger {
  left: 20px;
  right: auto;
}

.rtl .flyout-menu .hamburger {
  left: 20px;
  right: auto;
}
</style>
