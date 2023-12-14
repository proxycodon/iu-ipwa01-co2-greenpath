<template>
  <div
    class="accordion-item container-fluid"
    role="article"
    :aria-posinset="pos"
    :aria-setsize="total"
  >
    <h2 class="accordion-header" :id="'heading' + id">
      <!-- Button that displays the question and when clicked displays/hides the answer -->
      <button
        class="accordion-button"
        :class="{ 'collapsed': !isExpanded }"
        type="button"
        @click="$emit('toggle')"
        :aria-expanded="isExpanded.toString()"
        :aria-controls="'collapse' + id"
      >
        {{ question }}
      </button>
    </h2>
    <!-- Area that contains the answer to the FAQ entry and is shown/hidden by clicking on the question -->
    <div
      :id="'collapse' + id"
      class="accordion-collapse collapse"
      :class="{ 'show': isExpanded }"
      :aria-labelledby="'heading' + id"
      role="region"
    >
      <div class="accordion-body" tabindex="0">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    question: String,
    answer: String,
    pos: Number,
    total: Number,
    isExpanded: Boolean
  }
}
</script>

<style scoped>
.accordion-item {
    padding: 0;
}
</style>
