<template>
  <label class="todo-form" for="todo-input">
    <span class="circle"></span>
    <input
      type="text"
      id="todo-input"
      class="todo-form__input"
      placeholder="Create a new todo..."
      @keydown.enter="addTodo"
    />
  </label>
</template>

<script>
export default {
  name: 'TodoInput',
};
</script>
