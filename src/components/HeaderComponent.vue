<template>
  <!-- Main header component -->
  <div class="header container-fluid" :class="{ 'rtl': isRtl }">

    <!-- Logo and main navigation area -->
    <div class="row align-items-center justify-content-between">

      <!-- Logo area -->
      <div class="col logo-col">
        <router-link to="/">
          <img class="logo" src="@/assets/GP_Logo.svg" alt="Green Path Logo" />
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
    <div class="flyout-menu" :class="{ 'menu-open': isMenuOpen }">
    <div class="menu-item" @click="linkClicked(() => $router.push('/faq-page'))">
      FAQ
    </div>
    <div class="menu-item" @click="linkClicked(() => $router.push('/contact-us'))">
      Contact Us
    </div>
    <div class="menu-item" @click="linkClicked(() => $router.push('/our-vision'))">
      Our Vision
    </div>

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
  data () {
    return {
      isMenuOpen: false,
      isRtl: this.$root.alignment === 'rtl'
    }
  },

  methods: {
    // Switching the menu stage (open/closed)
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    // Navigate to a link and close the menu
    linkClicked (navigate) {
      this.toggleMenu()
      navigate()
    },
    closeMenu () {
      this.isMenuOpen = false
    }
  }
}
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
  .row {
    flex-wrap: nowrap;
  }

  .logo-col, .mobile-menu {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-col {
    justify-content: flex-start;
  }

  .mobile-menu {
    justify-content: flex-end;
  }

  .desktop-menu {
    display: none;
  }

  .hamburger {
    display: flex;
    position: relative;
    top: 0;
    right: 0;
  }

  .logo {
    height: auto;
    width: 100%;
  }
}
</style>
