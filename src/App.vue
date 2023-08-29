<template>
  <div id="app">
    <HeaderComponent />
    <img src="@/assets/greenPath_headerTransition.svg" alt="Header Transition" class="header-transition">
  
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

