<template>
  <li :class='{completed: todo.completed}'>
    <div class='view'>
      <input type='checkbox' class='toggle' v-model='todo.completed'>
      <label @dblclick='editTodo' v-if='!editing'>{{ todo.text }}</label>
      <button class='destroy' @click='destroy'></button>
    </div>
    <input
      type='text'
      class='edit'
      ret='text'
      v-if='editing'
      v-model='todo.text'
      @blur='doneEditTodo'
      @keydown.enter='doneEditTodo'
      v-focus
    >
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo'],
    data: function() {
      return {
        editing: false,
      }
    },
    methods: {
      destroy: function() {
        this.$emit('destroy')
      },
      doneEditTodo: function() {
        this.editing = false;
      },
      editTodo: function() {
        this.editing = true
      },
    }
  }
</script>

<style>
</style>