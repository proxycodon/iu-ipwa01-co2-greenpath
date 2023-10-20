<template>
  <h1 class="titleContentPages">FAQs</h1>
    <div class="vision-wrapper text-white px-2">
      <!-- Bootstrap accordion container for FAQ elements -->
      <div class="accordion" id="faqAccordion">
        <!-- Go through all FAQ data and display each FAQ entry as an accordion element -->
        <FaqItem
          v-for="item in faqs"
          :key="item.id"
          :id="item.id"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </template>
  
  <script>
  // Import the required components and data from components and external JSON
  import FaqItem from '@/components/FaqItem.vue';
  import faqsData from '@/faqs.json';
  
  export default {
      // Definition of the FaqItem component and its data
      components: {
          FaqItem
      },
      data() {
          return {
              faqs: faqsData
          };
      }
  }
  </script>
  
  <style scoped src="@/assets/styles/faq.css"></style>