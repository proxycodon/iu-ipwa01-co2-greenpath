<template>
  <div class="container-fluid">

     <!-- Integration of FilterBar component  -->
     <filter-bar
      :unique-companies="uniqueCompanies"
      :unique-countries="uniqueCountries"
      :filter-company="filterCompany"
      :filter-country="filterCountry"
      :search-term="searchTerm"
      @update:filterCompany="filterCompany = $event"
      @update:filterCountry="filterCountry = $event"
      @update:searchTerm="searchTerm = $event"
    ></filter-bar>

    <!-- Integration of DataTable component  -->
    <data-table
      :paginated-data="paginatedData"
      :sort-key="sortKey"
      :sort-order="sortOrder"
      :sort-by="sortBy"
      :format-number="formatNumber"
    ></data-table>

    <!-- Integration of PaginationComponent -->
    <pagination-component
      :total-pages="totalPages"
      :current-page="currentPage"
      :all-items-value="allItemsValue"
      @update:itemsPerPage="itemsPerPage = $event"
      @update:currentPage="currentPage = $event"
    ></pagination-component>

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
import api from '@/services/api'
import FilterBar from './FilterBar.vue'
import DataTable from './DataComponent.vue'
import PaginationComponent from './PaginationComponent.vue'

export default {
  components: {
    FilterBar,
    DataTable,
    PaginationComponent
  },
  data () {
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
    }
  },
  // Loads emission data when component is created
  async created () {
    await this.fetchEmissionsData()
  },
  methods: {
  // Asynchronous method for fetching emission data from the server
    async fetchEmissionsData () {
      try {
      // API request to get the emission data
        const response = await api.getEmissions()
        console.log('Emission data loaded', response)
        // Save the loaded data in the 'emissions' array
        this.emissions = response
      // Troubleshooting
      } catch (error) {
        console.error('There was an error when fetching the emission data:', error)
      }
    },
    // Method for sorting emissions data according to specific key
    sortBy (key) {
      this.sortOrder = this.sortKey === key ? this.sortOrder * -1 : 1
      this.sortKey = key

      this.emissions.sort((a, b) => {
        switch (key) {
          case 'company':
            return (a.company < b.company ? -1 : 1) * this.sortOrder
          case 'country':
            return (a.country < b.country ? -1 : 1) * this.sortOrder
          case 'emissions':
            return (a.emissions < b.emissions ? -1 : 1) * this.sortOrder
          default:
            return 0
        }
      })
    },
    // Method for formatting numbers with thousands separators
    formatNumber (value) {
      return new Intl.NumberFormat('en-US').format(value)
    }
  },

  computed: {
  // Calculated property that filters the emission data based on the search term, country, and company filters
    filteredData () {
      return this.emissions.filter(entry =>
        (this.filterCountry === '' || entry.country === this.filterCountry) &&
        (this.filterCompany === '' || entry.company === this.filterCompany) &&
        (entry.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
         entry.country.toLowerCase().includes(this.searchTerm.toLowerCase()))
      )
    },

    // Calculated property paginating the emission data based on the current page
    paginatedData () {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = this.itemsPerPage === this.allItemsValue ? this.filteredData.length : start + this.itemsPerPage
      return this.filteredData.slice(start, end)
    },

    // Calculated the total number of pages based on the number of filtered data and entries per page
    totalPages () {
      const totalEntries = this.filteredData.length
      return Math.ceil(totalEntries / this.itemsPerPage)
    },

    // Get a list of unique countries from the emission data for the country filter dropdown
    uniqueCountries () {
      const countries = this.emissions.map(entry => entry.country)
      return [...new Set(countries)]
    },

    // Get a list of unique companies from the emission data for the company filter dropdown
    uniqueCompanies () {
      const companies = this.emissions.map(entry => entry.company)
      return [...new Set(companies)]
    }
  },
  // Observer for 'itemsPerPage': Resets the current page if the number of items per page is changed.
  // This is necessary to ensure that the user does not land on a blank page if the number of entries per page
  // is greater than the total number of existing entries
  watch: {
    itemsPerPage (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.currentPage = 1
      }
    }
  }
}
</script>

<style scoped>
.container-fluid {
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

.report-bug-button {
    background-color: #dc3545;
    color: white;
  }
</style>
