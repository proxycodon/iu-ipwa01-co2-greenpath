<template>
  <div class="table container-fluid">
    <!-- Search field for filtering the table entries -->
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search..."
      class="form-control mb-3"
    />
    <!-- Table is only displayed if there is data to display -->
    <table
      class="table table-bordered table-hover"
      v-if="paginatedData.length > 0"
    >
      <!-- Header of the table with column names and sorting icons -->
      <thead>
        <tr>
          <!-- Clickable column header to sort by company -->
          <th scope="col" @click="sortBy('company')">
            Company
            <span v-if="sortKey === 'company' && sortOrder === 1"
              >&#x2193;</span
            >
            <span v-if="sortKey === 'company' && sortOrder === -1"
              >&#x2191;</span
            >
            <span v-if="sortKey !== 'company'">&#x2195;</span>
          </th>

          <!-- Clickable column header to sort by country -->
          <th scope="col" @click="sortBy('country')">
            Country
            <span v-if="sortKey === 'country' && sortOrder === 1"
              >&#x2193;</span
            >
            <span v-if="sortKey === 'country' && sortOrder === -1"
              >&#x2191;</span
            >
            <span v-if="sortKey !== 'country'">&#x2195;</span>
          </th>

          <!-- Clickable column header to sort by emissions -->
          <th scope="col" @click="sortBy('emissions')">
            Emissions (t CO₂)
            <span v-if="sortKey === 'emissions' && sortOrder === 1"
              >&#x2193;</span
            >
            <span v-if="sortKey === 'emissions' && sortOrder === -1"
              >&#x2191;</span
            >
            <span v-if="sortKey !== 'emissions'">&#x2195;</span>
          </th>
        </tr>
      </thead>

      <!-- Body of the table showing the emission data and country for each company -->
      <tbody>
        <tr v-for="entry in paginatedData" :key="entry.id">
          <td>{{ entry.company }}</td>
          <td>{{ entry.country }}</td>
          <td>{{ formatNumber(entry.emissions) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination component for navigating through the table pages -->
    <ul class="pagination" v-if="paginatedData.length > 0">
      <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="currentPage--"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="page in totalPages"
        :key="page"
        :class="{ 'active': page === currentPage }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="currentPage = page"
          >{{ page }}</a
        >
      </li>
      <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="currentPage++">Next</a>
      </li>
    </ul>

    <div v-else class="text-danger">Nothing found!</div>
  </div>
</template>

<script>
// Import emission data from external JSON file
import emissionData from '@/emission-data.json';

export default {
  data() {
    // Defining the reactive data for the component
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
    // Method for sorting emissions data according to specific key
    sortBy(key) {
  this.sortOrder = this.sortKey === key ? this.sortOrder * -1 : 1;
  this.sortKey = key;

  this.emissionData.sort((a, b) => {
    switch (key) {
      case 'company':
        return (a.company < b.company ? -1 : 1) * this.sortOrder;
      case 'country':
        return (a.country < b.country ? -1 : 1) * this.sortOrder;
      case 'emissions':
        return (a.emissions < b.emissions ? -1 : 1) * this.sortOrder;
      default:
        return 0;
    }
  });
},
    formatNumber(value) {
      // Method for formatting numbers with thousands separators
      // Disable the ESLint warning for this particular line because the regular expression is safe
      // eslint-disable-next-line security/detect-unsafe-regex
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    // Calculated property that filters the emission data based on the search term
    filteredData() {
      return this.emissionData.filter(entry =>
        entry.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        entry.country.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },

    // Calculated property paginating the emission data based on the current page
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },

    // Calculated the total number of pages based on the number of filtered data and entries per page
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    }
  }
};
</script>

<style scoped src="@/assets/styles/table.css"></style>
