<template>
  <button class='clear-completed' @click='clearCompleted'>Clear completed</button>
</template>

<script>
export default {
  name: 'ClearCompleted',
  methods: {
    clearCompleted: function() {
      this.$emit('clearCompleted')
    }
  }
}
</script>

<style>
</style>