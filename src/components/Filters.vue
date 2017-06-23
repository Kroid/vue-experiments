<template>
  <ul class='filters'>
    <li>
      <a
        href="#"
        :class='{selected: selectedFilter == "all"}'
        @click='select("all")'
      >All</a>
    </li>
    <li>
      <a
        href="#"
        :class='{selected: selectedFilter == "active"}'
        @click='select("active")'
      >Active</a>
    </li>
    <li>
      <a
        href="#"
        :class='{selected: selectedFilter == "completed"}'
        @click='select("completed")'
      >Completed</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Filters',
  methods: {
    select: function(filter) {
      this.$store.commit('selectFilter', filter)
    }
  },
  computed: {
    selectedFilter: function() {
      return this.$store.state.selectedFilter;
    }
  }
}
</script>

<style>
</style>