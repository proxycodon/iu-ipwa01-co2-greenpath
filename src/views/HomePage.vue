<script>
import EmissionTable from '@/components/EmissionTable.vue';

export default {
  components: {
    EmissionTable
  }
}
</script>


<template>
    <div id="dashboard">
      

      <div class="vision-wrapper text-white px-2">
        <h1>CO2-Footprint Database</h1>
        <p>Welcome to Green Path! Explore our database of CO2-emissions from some of the world's largest companies and learn more about the impact various activities have on the planet. We are working every day to expand this database. Together, we can make numbers-based decisions and make a difference for a better tomorrow.</p>
      </div>


      <EmissionTable />

    </div>
  </template>
  
<style scoped>

.vision-wrapper {
  width: 90vw;
  padding: 20px;
  margin: 0 auto;
}

</style>
  