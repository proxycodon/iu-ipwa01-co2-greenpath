<template>
  <div id="dashboard">
      <h1 class=titleContentPages>CO2-Footprint Database</h1>
      <div class="introText">
      <p>
        Welcome to Green Path! Explore our database of CO2-emissions from some
        of the world's largest companies and learn more about the impact various
        activities have on the planet. We are working every day to expand this
        database. Together, we can make numbers-based decisions and make a
        difference for a better tomorrow.
      </p>
    </div>
    <!-- Component for displaying CO2 emission data -->
    <EmissionTable />
  </div>
</template>

<script>
// Import the required components
import EmissionTable from '@/components/EmissionTable.vue';

export default {
  // Definition of the components used
  components: {
    EmissionTable
  }
}
</script>