<template>
  <input type='checkbox' class='toggle-all' @click='completeAll'>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Toggle',
    methods: {
      ...mapMutations([
        'completeAll',
      ]),
    }
  }
</script>

<style>
</style>