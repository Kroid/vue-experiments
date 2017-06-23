<template>
  <span class='todo-count'>{{ activeTodosCount }} items left</span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TodoCount',
  props: ['count'],
  computed: {
    ...mapGetters([
      'activeTodosCount',
    ])
  }
}
</script>

<style>
</style>