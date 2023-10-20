<template>
  <h1 class="titleContentPages">FAQs</h1>
    <div class="vision-wrapper text-white px-2">
      <div class="accordion" id="faqAccordion">
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
  import FaqItem from '@/components/FaqItem.vue';
  import faqsData from '@/faqs.json';
  
  export default {
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