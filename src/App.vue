<script setup>
// Import main components for header and footer
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <HeaderComponent />
      <!-- View area where pages specified by the router are rendered -->
      <div class="content-flex-fill">
        <RouterView></RouterView>
      </div>
    <FooterComponent />
  </div>
</template>

<style>
body, html {
    height: 100%;
    margin: 0;
}

body {
    background-color: #171611;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
}

h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
    font-size: 32px;
}

h2 {
    font-size: 20px;
  }

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header-transition,
.footer-transition {
    width: 100%;
    display: block;
}

.content-flex-fill {
    flex: 1;
    background: #171611;
}

.title {
    justify-content: center;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: white;
    margin: 20px;
}
  
  .vision-wrapper {
    width: 90vw;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
    background-color: #344e41;
  }
  
  .titleContentPages {
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
    color: white;
    font-weight: bold;
  }

  .introText {
    width: 90vw;
    padding: 0px 20px 0px 20px;
    margin: 0 auto;
    color: white;
  }
</style>
