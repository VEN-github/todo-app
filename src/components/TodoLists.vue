<template>
  <div class="todo">
    <div class="todo__heading">
      <h3 class="todo__heading-title">todo</h3>
      <button class="btn-theme">
        <!-- <img
          src="../assets/images/icon-moon.svg"
          alt="Theme Icon"
          class="todo__icon todo__icon--theme"
        /> -->
        <img
          src="../assets/images/icon-sun.svg"
          alt="Theme Icon"
          class="todo__icon todo__icon--theme"
        />
      </button>
    </div>
    <TodoInput />
    <ul class="todo__lists">
      <TodoList />
      <TodoActions />
    </ul>
    <ul class="todo__filter">
      <TodoFilter />
    </ul>
    <p class="todo__drag">Drag and drop to reorder list</p>
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import TodoActions from './TodoActions.vue';
import TodoFilter from './TodoFilter.vue';
export default {
  name: 'TodoLists',
  components: {
    TodoInput,
    TodoList,
    TodoActions,
    TodoFilter,
  },
};
</script>
