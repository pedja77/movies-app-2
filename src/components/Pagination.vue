<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{disabled: isFirstPage}">
        <a class="page-link" href="#" @click="prev">Previous</a>
      </li>
      <!-- <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li> -->
      <li class="page-item" :class="{disabled: isLastPage}">
        <a class="page-link" href="#" @click="next">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    paginationData: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFirstPage() {
      return this.paginationData.current_page === 1
    },
    isLastPage() {
      return this.paginationData.current_page === this.paginationData.last_page
    }
  },
  methods: {
    prev() {
      this.$emit("go-to-prev-page", -1)
    },
    next() {
      this.$emit("go-to-next-page", 1)
    }
  }
}
</script>

<style>
</style>
