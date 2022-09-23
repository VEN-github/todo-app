<template>
  <li class="todo__lists-action">
    <span>5 items left</span>
    <ul class="todo-action__filter">
      <li class="todo-action__category">All</li>
      <li class="todo-action__category">Active</li>
      <li class="todo-action__category">Completed</li>
    </ul>
    <button class="btn-clear">Clear Completed</button>
  </li>
</template>

<script>
export default {
  name: 'TodoActions',
};
</script>
