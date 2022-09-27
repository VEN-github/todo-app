<template>
  <li class="todo__lists-data" @dragstart="$emit('start-drag', { event: $event, todoId: todo.id })">
    <input
      type="checkbox"
      class="todo__lists-checkbox"
      :checked="todo.completed"
      @click="$emit('complete-todo', todo.id)"
    />
    <span class="todo__lists-text">{{ todo.title }}</span>
    <button class="btn-delete" @click="$emit('delete-todo', todo.id)">
      <img src="../assets/images/icon-cross.svg" alt="Cross Icon" class="todo__icon" />
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todo: Object,
  },
  emits: ['complete-todo', 'delete-todo', 'start-drag'],
};
</script>
