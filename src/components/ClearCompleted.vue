<template>
  <button class='clear-completed' @click='clearCompleted'>Clear completed</button>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'ClearCompleted',
    methods: {
      ...mapMutations([
        'clearCompleted',
      ]),
    }
  }
</script>

<style>
</style>