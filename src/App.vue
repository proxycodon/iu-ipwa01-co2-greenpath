<template>
  <div id="app" :dir="alignment">
    <HeaderComponent />
    <div class="content-flex-fill">
      <RouterView></RouterView>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

// Checking the user language and adjusting RTL if required
const rtlLanguages = ["ar", "arc", "dv", "fa", "ha", "he", "khw", "ks", "ku", "ps", "ur", "yi"];

const language = ref(navigator.language || navigator.userLanguage);

const alignment = computed(() => {
  return rtlLanguages.includes(language.value.split('-')[0]) ? 'rtl' : 'ltr';
});
</script>

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

h3 {
  font-size: 18px;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
