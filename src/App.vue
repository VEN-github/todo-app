<template>
  <main>
    <img
      :src="isDark ? './images/bg-desktop-dark.jpg' : './images/bg-desktop-light.jpg'"
      alt="Banner image"
      class="banner"
    />
    <div class="container">
      <TodoLists
        :todos="todos"
        :categories="categories"
        :isDark="isDark"
        @add-todo="addTodo"
        @complete-todo="completeTodo"
        @delete-todo="deleteTodo"
        @filter-todos="filterTodos"
        @clear-completed="clearCompleted"
        @toggle-dark="toggleDark"
        @start-drag="startDrag"
        @on-drop="onDrop"
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
    categories() {
      return this.$store.getters.getAllCategories;
    },
    isDark() {
      return this.$store.getters.isDark;
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
    toggleDark() {
      this.$store.dispatch('toggleDark');
    },
    startDrag({ event, todoId }) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('todoId', todoId);
    },
    onDrop({ event, index }) {
      const todoId = event.dataTransfer.getData('todoId');
      const todo = this.todos.find(todo => todo.id == todoId);
      const selected = this.todos.splice(index, 1, todo);
      this.todos.splice(index, 1, todo);
      this.todos.splice(this.todos.indexOf(todo), 1, selected[0]);
      this.$store.dispatch('storeTodos', this.todos);
    },
  },
  watch: {
    isDark(value) {
      if (value) {
        document.documentElement.setAttribute('data-theme', 'dark');
        return;
      }
      document.documentElement.setAttribute('data-theme', 'light');
    },
  },
};
</script>
