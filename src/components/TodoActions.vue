<template>
  <li class="todo__lists-action">
    <span>{{ itemsLeft }} items left</span>
    <ul class="todo-action__filter">
      <li
        class="todo-action__category"
        v-for="(category, index) in categories"
        :key="index"
        :class="{ 'todo-action__category--active': selectedCategory === category }"
        @click="$emit('filter-todos', category)"
      >
        {{ category }}
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
    categories: Array,
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
