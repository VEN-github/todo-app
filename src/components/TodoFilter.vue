<template>
  <li
    class="todo__category"
    :class="{ 'todo__category--active': selectedCategory === category }"
    @click="$emit('filter-todos', category)"
  >
    {{ category }}
  </li>
</template>

<script>
export default {
  name: 'TodoFilter',
  props: {
    category: String,
  },
  computed: {
    selectedCategory() {
      return this.$store.getters.getSelectedCategory;
    },
  },

  emits: ['filter-todos'],
};
</script>
