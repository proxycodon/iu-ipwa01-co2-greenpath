<template>
  <div class="table container-fluid my-4">

    <input type="text" v-model="searchTerm" placeholder="Search..." class="form-control mb-3">

    <table class="table table-bordered table-hover" v-if="paginatedData.length > 0">
      <thead>
    <tr>

        <th scope="col" @click="sortBy('company')">
            Company 
            <span v-if="sortKey === 'company' && sortOrder === 1">&#x2193;</span>
            <span v-if="sortKey === 'company' && sortOrder === -1">&#x2191;</span>
            <span v-if="sortKey !== 'company'">&#x2195;</span>
        </th>


        <th scope="col" @click="sortBy('country')">
            Country 
            <span v-if="sortKey === 'country' && sortOrder === 1">&#x2193;</span>
            <span v-if="sortKey === 'country' && sortOrder === -1">&#x2191;</span>
            <span v-if="sortKey !== 'country'">&#x2195;</span>
        </th>
        <th scope="col" @click="sortBy('emissions')">
            Emissions (t CO₂) 
            <span v-if="sortKey === 'emissions' && sortOrder === 1">&#x2193;</span>
            <span v-if="sortKey === 'emissions' && sortOrder === -1">&#x2191;</span>
            <span v-if="sortKey !== 'emissions'">&#x2195;</span>
        </th>
    </tr>
</thead>

      <tbody>

        <tr v-for="entry in paginatedData" :key="entry.company">
          <td>{{ entry.company }}</td>
          <td>{{ entry.country }}</td>
          <td>{{ entry.emissions }}</td>
        </tr>
      </tbody>
    </table>

    <ul class="pagination" v-if="paginatedData.length > 0">
      <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="currentPage--">Previous</a>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': page === currentPage }">
        <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="currentPage++">Next</a>
      </li>
    </ul>

    <div v-else class="text-danger">
       Nothing found!
    </div>
  </div>
</template>

<script>
import emissionData from '@/emission-data.json';

export default {
  data() {
    return {
      emissionData: emissionData,
      searchTerm: '',
      sortKey: '',
      sortOrder: 1,
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  methods: {
    sortBy(key) {
      this.sortOrder = this.sortKey === key ? this.sortOrder * -1 : 1;
      this.sortKey = key;
      this.emissionData.sort((a, b) => {
        if (a[key] < b[key]) return -1 * this.sortOrder;
        if (a[key] > b[key]) return 1 * this.sortOrder;
        return 0;
      });
    }
  },
  computed: {
    filteredData() {
      return this.emissionData.filter(entry => 
        entry.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        entry.country.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    }
  }
};
</script>

<style scoped src="@/assets/styles/table.css"></style>