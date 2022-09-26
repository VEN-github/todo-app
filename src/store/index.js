import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      todos: [],
      categories: ['All', 'Active', 'Completed'],
      selectedCategory: 'All',
      isDark: false,
    };
  },
  getters: {
    getAllTodos({ todos, selectedCategory }) {
      switch (selectedCategory) {
        case 'Active':
          return todos.filter(todo => !todo.completed);
        case 'Completed':
          return todos.filter(todo => todo.completed);
        default:
          return todos;
      }
    },
    getAllCategories({ categories }) {
      return categories;
    },
    getSelectedCategory({ selectedCategory }) {
      return selectedCategory;
    },
    isDark({ isDark }) {
      return isDark;
    },
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    setSelectedCategory(state, payload) {
      state.selectedCategory = payload;
    },
    setDarkMode(state, payload) {
      state.isDark = payload;
    },
  },
  actions: {
    init({ dispatch }) {
      dispatch('initTodos');
      dispatch('loadDarkMode');
    },
    initTodos({ commit, dispatch }) {
      const todoLists = [
        {
          id: 1,
          title: 'Complete online JavaScript course',
          completed: true,
        },
        {
          id: 2,
          title: 'Jog around the park 3x',
          completed: false,
        },
        {
          id: 3,
          title: '10 minutes meditation',
          completed: false,
        },
        {
          id: 4,
          title: 'Read for 1 hour',
          completed: false,
        },
        {
          id: 5,
          title: 'Pick up groceries',
          completed: false,
        },
        {
          id: 6,
          title: 'Complete Todo App on Frontend Mentor',
          completed: false,
        },
      ];
      commit('setTodos', todoLists);
      dispatch('loadAllTodos');
    },
    loadAllTodos: async ({ state, commit }) => {
      let todos = await JSON.parse(localStorage.getItem('todos'));

      if (todos) {
        commit('setTodos', todos);
        return;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    storeTodos({ dispatch }, todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
      dispatch('loadAllTodos');
    },
    addTodo: async ({ dispatch }, todo) => {
      let todos = await JSON.parse(localStorage.getItem('todos'));

      if (!todos.length) {
        todos.push({ id: 1, title: todo, completed: false });
        dispatch('storeTodos', todos);
        return;
      }
      const id = todos[todos.length - 1].id + 1;
      todos.push({ id: id, title: todo, completed: false });
      dispatch('storeTodos', todos);
    },
    completeTodo: async ({ dispatch }, id) => {
      let todos = await JSON.parse(localStorage.getItem('todos'));
      todos.find(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        }
      });
      dispatch('storeTodos', todos);
    },
    deleteTodo: async ({ dispatch }, id) => {
      let todos = await JSON.parse(localStorage.getItem('todos'));

      const index = todos.findIndex(todo => todo.id === id);
      todos.splice(index, 1);
      dispatch('storeTodos', todos);
    },
    filterTodos({ commit }, category) {
      commit('setSelectedCategory', category);
    },
    clearCompleted: async ({ dispatch }) => {
      let todos = await JSON.parse(localStorage.getItem('todos'));
      todos.filter(todo => todo.completed).forEach(todo => todos.splice(todos.indexOf(todo), 1));
      dispatch('storeTodos', todos);
    },
    toggleDark({ dispatch, state }) {
      localStorage.setItem('isDark', JSON.stringify(!state.isDark));
      dispatch('loadDarkMode');
    },
    loadDarkMode: async ({ state, commit }) => {
      let dark = await localStorage.getItem('isDark');

      if (dark) {
        commit('setDarkMode', JSON.parse(dark));
        return;
      }
      localStorage.setItem('isDark', JSON.stringify(state.isDark));
    },
  },
});
