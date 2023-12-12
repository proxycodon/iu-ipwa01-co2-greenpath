<template>
  <div class="table container-fluid">
    <!-- Row for filters and search function-->
    <div class="row mb-3">
      <!-- Column for company filter -->
      <div class="col-md-4 mt-1">
        <select v-model="filterCompany" class="form-control">
          <option value="">All Companies</option>
          <option
            v-for="company in uniqueCompanies"
            :key="company"
            :value="company"
          >
            {{ company }}
          </option>
        </select>
      </div>
      <!-- Column for country filter -->
      <div class="col-md-4 mt-1">
        <select v-model="filterCountry" class="form-control">
          <option value="">All Countries</option>
          <option
            v-for="country in uniqueCountries"
            :key="country"
            :value="country"
          >
            {{ country }}
          </option>
        </select>
      </div>
      <!-- Column for search input -->
      <div class="col-md-4 mt-1">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search for..."
          class="form-control"
        />
      </div>
    </div>
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
    <!-- Row for items per page selection -->
    <div class="row mt-3 justify-content-start">
      <div class="col-md-2">
        <select
          id="entriesPerPageSelect"
          v-model="itemsPerPage"
          class="form-control"
        >
          <option value="10">10 Entries per page</option>
          <option value="50">50 Entries per page</option>
          <option value="100">100 Entries per page</option>
          <option :value="allItemsValue">All Entries</option>
        </select>
      </div>
    </div>

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

    <div v-else class="text-danger">
      Nothing found! Please adjust your filters or search parameters.
    </div>

    <div class="row mt-3 justify-content-center">
    <div class="col-md-4 text-center">
      <router-link to="/contact-us" class="btn btn-danger report-bug-button">
        Report an Error
      </router-link>

    </div>
  </div>
  </div>
</template>

<script>
// Import API for communication with the backend
import api from '@/services/api';

export default {
  data() {
    return {
      emissions: [],
      searchTerm: '',
      sortKey: '',
      sortOrder: 1,
      currentPage: 1,
      itemsPerPage: 10,
      filterCountry: '',
      filterCompany: '',
      allItemsValue: 10000
    };
  },
  // Loads emission data when component is created
  async created() {
    await this.fetchEmissionsData();
  },
  methods: {
    // Asynchronous method for fetching emission data from the server
    async fetchEmissionsData() {
      try {
        // API request to get the emission data
        const response = await api.getEmissions();
        console.log('Emission data loaded', response.data);
        // Save the loaded data in the 'emissions' array
        this.emissions = response.data;
        //Troubleshooting
      } catch (error) {
        console.error("There was an error when fetching the emission data:", error);
      }
    },
    // Method for sorting emissions data according to specific key
    sortBy(key) {
  this.sortOrder = this.sortKey === key ? this.sortOrder * -1 : 1;
  this.sortKey = key;


  this.emissions.sort((a, b) => {
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
  // Observer for 'itemsPerPage': Resets the current page if the number of items per page is changed
  

  computed: {
  // Calculated property that filters the emission data based on the search term, country, and company filters
  filteredData() {
    return this.emissions.filter(entry =>
      (this.filterCountry === '' || entry.country === this.filterCountry) &&
      (this.filterCompany === '' || entry.company === this.filterCompany) &&
      (entry.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
       entry.country.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  },
  

  // Calculated property paginating the emission data based on the current page
  paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.itemsPerPage === this.allItemsValue ? this.filteredData.length : start + this.itemsPerPage;
    return this.filteredData.slice(start, end);
  },

  // Calculated the total number of pages based on the number of filtered data and entries per page
  totalPages() {
      const totalEntries = this.filteredData.length;
      return Math.ceil(totalEntries / this.itemsPerPage);
    },

  // Get a list of unique countries from the emission data for the country filter dropdown
  uniqueCountries() {
    const countries = this.emissions.map(entry => entry.country);
    return [...new Set(countries)];
  },

  // Get a list of unique companies from the emission data for the company filter dropdown
  uniqueCompanies() {
    const companies = this.emissions.map(entry => entry.company);
    return [...new Set(companies)];
  }
},
watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.currentPage = 1;
      }
    }
  }
};
</script>

<style scoped>
.table {
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
  width: 90vw;
  margin: 0 auto;
  height: 800px;
  overflow-y: auto;
  background-color: #344e41;
  height: 100%;
}

.table-hover {
  width: 100%;
}

table th:nth-child(1) {
  width: 20%;
  cursor: pointer;
}

table th:nth-child(2) {
  width: 20%;
  cursor: pointer;
}

table th:nth-child(3) {
  width: 20%;
  cursor: pointer;
}

.pagination {
  justify-content: center;
  margin: 0 auto;
  padding-top: 20px;
}

.report-bug-button {
    background-color: #dc3545;
    color: white;
  }

@media (max-width: 880px) {
  .table th,
  .table td {
    padding: 0.3rem;
    font-size: 0.8rem;
  }
}
</style>
