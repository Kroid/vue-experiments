<template>
  <span class='todo-count'>{{ count }} items left</span>
</template>

<script>
export default {
  name: 'TodoCount',
  props: ['count'],
}
</script>

<style>
</style>