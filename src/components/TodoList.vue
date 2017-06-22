<template>
  <ul class='todo-list'>
    <todo-item
      v-for='(todo, idx) in todos'
      :todo='todo'
      @destroy='destroy(idx)'
    ></todo-item>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    name: 'TodoList',
    components: {
      TodoItem,
    },
    props: ['todos'],
    methods: {
      destroy: function(idx) {
        this.todos.splice(idx, 1)
        // console.log(idx)
      },
      completeAll: function() {
        this.todos.map((todo) => { todo.completed = !todo.completed })
      }
    },
    // data: function() {
    //   return {
    //     todos: this.items,
    //   }
    // }
  }
</script>

<style>
</style>