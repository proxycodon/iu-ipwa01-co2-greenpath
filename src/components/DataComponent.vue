<template>
    <div>
      <!-- Table is only displayed if there is data to display -->
      <table
        class="table table-bordered table-hover"
        v-if="paginatedData.length > 0"
        aria-describedby="emissionTableDescription">
        <caption class="caption" id="emissionTableDescription">Table with emissions data sorted by company, country and emissions</caption>

      <!-- Header of the table with column names and sorting icons -->
      <thead>
        <tr>

          <!-- Clickable column header to sort by company with dynamically updated aria-label -->
          <th
            scope="col"
            role="button"
            @click="sortBy('company')"
            :aria-label="'Sort by company ' + (sortKey === 'company' ? (sortOrder === 1 ? 'ascending' : 'descending') : '')"
          >
            Company
            <span v-if="sortKey === 'company' && sortOrder === 1"
              >&#x2193;</span
            >
            <span v-if="sortKey === 'company' && sortOrder === -1"
              >&#x2191;</span
            >
            <span v-if="sortKey !== 'company'">&#x2195;</span>
          </th>

          <!-- Clickable column header to sort by country with dynamically updated aria-label -->
          <th
            scope="col"
            role="button"
            @click="sortBy('country')"
            :aria-label="'Sort by country ' + (sortKey === 'country' ? (sortOrder === 1 ? 'ascending' : 'descending') : '')"
          >
            Country
            <span v-if="sortKey === 'country' && sortOrder === 1"
              >&#x2193;</span
            >
            <span v-if="sortKey === 'country' && sortOrder === -1"
              >&#x2191;</span
            >
            <span v-if="sortKey !== 'country'">&#x2195;</span>
          </th>

          <!-- Clickable column header to sort by emissions with dynamically updated aria-label -->
          <th
            scope="col"
            role="button"
            @click="sortBy('emissions')"
            :aria-label="'Sort by emissions ' + (sortKey === 'emissions' ? (sortOrder === 1 ? 'ascending' : 'descending') : '')"
          >
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

      <div v-else class="text-danger">
        Nothing found! Please adjust your filters or search parameters.
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    paginatedData: Array,
    sortKey: String,
    sortOrder: Number,
    sortBy: Function,
    formatNumber: Function
  }
}
</script>

  <style scoped>

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

.caption {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 880px) {
  .table th,
  .table td {
    padding: 0.3rem;
    font-size: 0.8rem;
  }
}
  </style>
