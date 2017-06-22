<template>
  <input
    autofocus
    type='text'
    class='new-todo'
    placeholder='What needs to be done?'
    v-model='text'
    @keydown.enter='submit'
  >
</template>

<script>
  export default {
    name: 'NewTodoInput',
    data: function() {
      return {
        text: '',
      }
    },
    methods: {
      submit: function() {
        if (!this.text) return;

        this.$emit('createTodo', this.text);
        this.text = ''
      }
    }
  }
</script>

<style>
</style>