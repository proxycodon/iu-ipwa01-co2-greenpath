<template>
  <!-- Single FAQ entry displayed as accordion element -->
  <div class="accordion-item container-fluid">
    <h2 class="accordion-header" :id="'heading' + id">
      <!-- Button that displays the question and when clicked displays/hides the answer -->
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
    <!-- Area that contains the answer to the FAQ entry and is shown/hidden by clicking on the question -->
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
  // Definition of the FaqItem component representing a single FAQ entry.
  export default {
    // Accepted properties for the FaqItem component
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