import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: [
    {text: 'example todo', completed: false},
    {text: 'another todo', completed: false},
    {text: 'third', completed: false},
  ],
  selectedFilter: 'all',
}

const mutations = {
  clearCompleted (state) {
    state.todos = state.todos.filter((todo) => { return !todo.completed; })
  },
  completeAll (state) {
    let uncompleted = state.todos.filter((todo) => { return !todo.completed })
    if (uncompleted.length) {
      uncompleted.map((todo) => { todo.completed = true })
    } else {
      state.todos.map((todo) => { todo.completed = false })
    }
  },
  createTodo(state, text) {
    state.todos.push({text: text, completed: false})
  },
  selectFilter (state, filter) {
    state.selectedFilter = filter
  },
}

const actions = {}

const getters = {
  filteredTodos: function(state, getters) {
    if (state.selectedFilter == 'completed') {
      return getters.completedTodos;
    } else if (state.selectedFilter == 'active') {
      return getters.activeTodos;
    } else {
      return state.todos;
    }
  },
  activeTodos: state => state.todos.filter((todo) => { return !todo.completed; }),
  activeTodosCount: (state, getters) => getters.activeTodos.length,
  completedTodos: state => state.todos.filter((todo) => { return todo.completed; }),
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})