<template>
  <main>
    <!-- <img src="./assets/images/bg-desktop-light.jpg" alt="Banner image" class="banner" /> -->
    <img src="./assets/images/bg-desktop-dark.jpg" alt="Banner image" class="banner" />
    <div class="container">
      <TodoLists
        :todos="todos"
        @add-todo="addTodo($event)"
        @complete-todo="completeTodo($event)"
        @delete-todo="deleteTodo($event)"
        @filter-todos="filterTodos($event)"
        @clear-completed="clearCompleted"
      />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/VEN-github">Raven Barrogo</a>.
      </div>
    </div>
  </main>
</template>

<script>
import TodoLists from './components/TodoLists.vue';
export default {
  name: 'App',
  components: {
    TodoLists,
  },
  computed: {
    todos() {
      return this.$store.getters.getAllTodos;
    },
  },
  created() {
    this.$store.dispatch('init');
  },
  methods: {
    addTodo(todo) {
      if (!todo) {
        alert('Please input new todo.');
        return;
      }
      this.$store.dispatch('addTodo', todo);
    },
    completeTodo(id) {
      this.$store.dispatch('completeTodo', id);
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    filterTodos(category) {
      this.$store.dispatch('filterTodos', category);
    },
    clearCompleted() {
      this.$store.dispatch('clearCompleted');
    },
  },
  // mounted() {
  //   this.$nextTick(() => document.getElementById('app').classList.add('dark'));
  // },
};
</script>
