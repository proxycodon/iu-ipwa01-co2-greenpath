<template>
    <div>
      <!-- Row for items per page selection -->
      <div class="row mt-2 justify-content-start">
        <div class="col-md-2">
          <select
            id="entriesPerPageSelect"
            v-model="itemsPerPage"
            class="form-control"
            @change="updateItemsPerPage"
          >
            <option value="10">10 Entries per page</option>
            <option value="50">50 Entries per page</option>
            <option value="100">100 Entries per page</option>
            <option :value="allItemsValue">All Entries</option>
          </select>
        </div>
      </div>

      <!-- Pagination component for navigating through the table pages -->
      <ul class="pagination" v-if="totalPages > 0" aria-label="Emissions data page navigation">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="decrementPage"
             aria-label="Go to previous page"
             :aria-disabled="currentPage === 1 ? 'true' : 'false'"
          >
            Previous
          </a>
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
            @click.prevent="setCurrentPage(page)"
            :aria-label="'Go to page ' + page"
            :aria-current="page === currentPage ? 'page' : null"
          >
            {{ page }}
          </a>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="incrementPage"
             aria-label="Go to next page"
             :aria-disabled="currentPage === totalPages ? 'true' : 'false'"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  props: {
    totalPages: Number,
    currentPage: Number,
    allItemsValue: Number
  },
  data () {
    return {
      itemsPerPage: 10
    }
  },
  methods: {
    updateItemsPerPage () {
      this.$emit('update:itemsPerPage', this.itemsPerPage)
    },
    decrementPage () {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1)
      }
    },
    incrementPage () {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1)
      }
    },
    setCurrentPage (page) {
      this.$emit('update:currentPage', page)
    }
  }
}
</script>

  <style scoped>
.pagination {
  justify-content: center;
  margin: 0 auto;
  padding-top: 20px;
}
  </style>
