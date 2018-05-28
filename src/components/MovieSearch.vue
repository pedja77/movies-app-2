<template>
  <div>
    <form>
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="searchTerm" @input="emitSearchTerm">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    }
  },
  methods: {
    emitSearchTerm() {
      this.$eventHub.$emit("search-term-updated", this.searchTerm)
    }
  }
}
</script>


