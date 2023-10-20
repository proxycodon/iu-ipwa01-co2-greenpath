<template>
    <div class="accordion-item container-fluid">
      <h2 class="accordion-header" :id="'heading' + id">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + id"
          aria-expanded="false"
          :aria-controls="'collapse' + id"
        >
          {{ question }}
        </button>
      </h2>
      <div
        :id="'collapse' + id"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + id"
        data-bs-parent="#faqAccordion"
      >
        <div class="accordion-body">
          {{ answer }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          id: {
              type: Number,
              required: true
          },
          question: {
              type: String,
              required: true
          },
          answer: {
              type: String,
              required: true
          }
      }
  }
  </script>
  
  <style scoped src="@/assets/styles/faq.css"></style>