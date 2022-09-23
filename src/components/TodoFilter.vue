<template>
  <li
    class="todo__category"
    :class="{ 'todo__category--active': selectedCategory === 'All' }"
    @click="$emit('filter-todos', 'All')"
  >
    All
  </li>
  <li
    class="todo__category"
    :class="{ 'todo__category--active': selectedCategory === 'Active' }"
    @click="$emit('filter-todos', 'Active')"
  >
    Active
  </li>
  <li
    class="todo__category"
    :class="{ 'todo__category--active': selectedCategory === 'Completed' }"
    @click="$emit('filter-todos', 'Completed')"
  >
    Completed
  </li>
</template>

<script>
export default {
  name: 'TodoFilter',
  computed: {
    selectedCategory() {
      return this.$store.getters.getSelectedCategory;
    },
  },

  emits: ['filter-todos'],
};
</script>
