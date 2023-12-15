<template>
  <h1 class="titleContentPages">FAQs</h1>
  <div class="vision-wrapper text-white px-2">

    <!-- Bootstrap accordion container for FAQ elements -->
    <div class="accordion" id="faqAccordion">

      <!-- Go through all FAQ data and display each FAQ entry as an accordion element -->
      <FaqComponent
        v-for="(Component, index) in faqs"
        :key="Component.id"
        :id="Component.id"
        :isExpanded="expandedComponent === Component.id"
        :question="Component.question"
        :answer="Component.answer"
        :pos="index + 1"
        :total="faqs.length"
        @toggle="toggleComponent(Component.id)"
      />
    </div>
  </div>
</template>

<script>

// Import FAQ Component component and API
import FaqComponent from '@/components/FaqComponent.vue'
import api from '@/services/api'

export default {
  components: {
    FaqComponent
  },
  data () {
    return {
      // Array for saving the FAQ data
      faqs: [],
      expandedComponent: null // Track the expanded Component
    }
  },
  // Loads FAQ data when component is created
  async created () {
    await this.fetchFaqsData()
  },
  methods: {
    // Method to fetch FAQ data
    async fetchFaqsData () {
      try {
        const response = await api.getFaqs()
        console.log('FAQ data loaded', response)
        this.faqs = response
      } catch (error) {
        console.error('There was an error fetching the FAQ data', error)
      }
    },
    // Toggle the expanded Component
    toggleComponent (id) {
      this.expandedComponent = this.expandedComponent === id ? null : id
    }
  }
}
</script>

<style scoped>
  .accordion {
    overflow: hidden;
    padding: 20px;
    margin: 0 auto;
    height: 800px;
    overflow-y: auto;
    background-color: #344e41;
    height: 100%;
  }
</style>
