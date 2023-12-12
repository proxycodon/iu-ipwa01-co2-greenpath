<template>
  <h1 class="titleContentPages">FAQs</h1>
  <div class="vision-wrapper text-white px-2">
    <!-- Bootstrap accordion container for FAQ elements -->
    <div class="accordion" id="faqAccordion">
      <!-- Go through all FAQ data and display each FAQ entry as an accordion element -->
      <FaqItem
        v-for="(item, index) in faqs"
        :key="item.id"
        :id="item.id"
        :isExpanded="expandedItem === item.id"
        :question="item.question"
        :answer="item.answer"
        :pos="index + 1" 
        :total="faqs.length"
        @toggle="toggleItem(item.id)"
      />
    </div>
  </div>
</template>

<script>
// Import FAQ item component and API
import FaqItem from '@/components/FaqItem.vue';
import api from '@/services/api';

export default {
  components: {
    FaqItem
  },
  data() {
    return {
      // Array for saving the FAQ data
      faqs: [],
      expandedItem: null, // Track the expanded item
    };
  },
  // Loads FAQ data when component is created
  async created() {
    await this.fetchFaqsData();
  },
  methods: {
    // Method to fetch FAQ data
    async fetchFaqsData() {
      try {
        const response = await api.getFaqs();
        console.log('FAQ data loaded', response.data);
        this.faqs = response.data;
      } catch (error) {
        console.error("There was an error fetching the FAQ data", error);
      }
    },
    // Toggle the expanded item
    toggleItem(id) {
      this.expandedItem = this.expandedItem === id ? null : id;
    },
  }
};
</script>
  
<style scoped>
  .vision-wrapper {
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
  }
  .accordion {
    overflow: hidden;
    padding: 20px;
    margin: 0 auto;
    height: 800px;
    overflow-y: auto;
    background-color: #344e41;
    height: 100%;
  }
  
  .titleContentPages {
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
  }
</style>
