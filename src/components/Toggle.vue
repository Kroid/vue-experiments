<template>
  <input type='checkbox' class='toggle-all' @click='completeAll'>
</template>

<script>
export default {
  name: 'Toggle',
  methods: {
    completeAll: function() {
      this.$emit('completeAll')
    }
  }
}
</script>

<style>
</style>