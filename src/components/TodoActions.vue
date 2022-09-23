<template>
  <li class="todo__lists-action">
    <span>{{ itemsLeft }} items left</span>
    <ul class="todo-action__filter">
      <li
        class="todo-action__category"
        :class="{ 'todo-action__category--active': selectedCategory === 'All' }"
        @click="$emit('filter-todos', 'All')"
      >
        All
      </li>
      <li
        class="todo-action__category"
        :class="{ 'todo-action__category--active': selectedCategory === 'Active' }"
        @click="$emit('filter-todos', 'Active')"
      >
        Active
      </li>
      <li
        class="todo-action__category"
        :class="{ 'todo-action__category--active': selectedCategory === 'Completed' }"
        @click="$emit('filter-todos', 'Completed')"
      >
        Completed
      </li>
    </ul>
    <button class="btn-clear" @click="$emit('clear-completed')">Clear Completed</button>
  </li>
</template>

<script>
export default {
  name: 'TodoActions',
  props: {
    todos: Array,
  },
  computed: {
    selectedCategory() {
      return this.$store.getters.getSelectedCategory;
    },
    itemsLeft() {
      return this.todos.filter(todo => !todo.completed).length;
    },
  },
  emits: ['filter-todos', 'clear-completed'],
};
</script>
