<template>
    <div class="row mb-3">
      <!-- Column for company filter -->
      <div class="col-md-4 mt-1">
        <select v-model="localFilterCompany" class="form-control" @change="updateFilters">
          <option value="">All Companies</option>
          <option v-for="company in uniqueCompanies" :key="company" :value="company">
            {{ company }}
          </option>
        </select>
      </div>

      <!-- Column for country filter -->
      <div class="col-md-4 mt-1">
        <select v-model="localFilterCountry" class="form-control" @change="updateFilters">
          <option value="">All Countries</option>
          <option v-for="country in uniqueCountries" :key="country" :value="country">
            {{ country }}
          </option>
        </select>
      </div>

      <!-- Column for search input -->
      <div class="col-md-4 mt-1">
        <input
          type="text"
          v-model="localSearchTerm"
          placeholder="Search for..."
          class="form-control"
          @input="updateSearch"
        />
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    uniqueCompanies: Array,
    uniqueCountries: Array,
    filterCompany: String,
    filterCountry: String,
    searchTerm: String
  },
  data () {
    return {
      localFilterCompany: this.filterCompany,
      localFilterCountry: this.filterCountry,
      localSearchTerm: this.searchTerm
    }
  },
  methods: {
    updateFilters () {
      this.$emit('update:filterCompany', this.localFilterCompany)
      this.$emit('update:filterCountry', this.localFilterCountry)
    },
    updateSearch () {
      this.$emit('update:searchTerm', this.localSearchTerm)
    }
  },
  watch: {
    filterCompany (newVal) {
      this.localFilterCompany = newVal
    },
    filterCountry (newVal) {
      this.localFilterCountry = newVal
    },
    searchTerm (newVal) {
      this.localSearchTerm = newVal
    }
  }
}
</script>
