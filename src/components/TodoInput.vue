<template>
  <label class="todo-form" for="todo-input">
    <span class="circle"></span>
    <input
      type="text"
      id="todo-input"
      class="todo-form__input"
      placeholder="Create a new todo..."
      v-model.trim="newTodo"
      @keydown.enter="addTodo"
    />
  </label>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodo: null,
    };
  },
  methods: {
    addTodo() {
      this.$emit('add-todo', this.newTodo);
      this.newTodo = null;
    },
  },
  emits: ['add-todo'],
};
</script>
