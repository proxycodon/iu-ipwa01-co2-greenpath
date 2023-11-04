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
   <svg id="visual" viewBox="0 0 900 100" width=100% xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="100" fill="#344E41"></rect><path d="M0 19L12.5 24.3C25 29.7 50 40.3 75 47.8C100 55.3 125 59.7 150 58C175 56.3 200 48.7 225 39C250 29.3 275 17.7 300 25C325 32.3 350 58.7 375 69.5C400 80.3 425 75.7 450 66.5C475 57.3 500 43.7 525 42.3C550 41 575 52 600 49.5C625 47 650 31 675 30.2C700 29.3 725 43.7 750 51.7C775 59.7 800 61.3 825 65.2C850 69 875 75 887.5 78L900 81L900 101L887.5 101C875 101 850 101 825 101C800 101 775 101 750 101C725 101 700 101 675 101C650 101 625 101 600 101C575 101 550 101 525 101C500 101 475 101 450 101C425 101 400 101 375 101C350 101 325 101 300 101C275 101 250 101 225 101C200 101 175 101 150 101C125 101 100 101 75 101C50 101 25 101 12.5 101L0 101Z" fill="#171611" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
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

  .logo {
    max-width: 95%;
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
