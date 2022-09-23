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
    <TodoInput @add-todo="$emit('add-todo', $event)" />
    <ul class="todo__lists">
      <div class="todo__empty" v-if="!todos.length">
        <img
          src="../assets/images/empty-todos.svg"
          alt="Empty Todos"
          class="todo__empty-illustration"
        />
        <p class="todo__empty-text">No todos yet</p>
      </div>
      <div v-else>
        <TransitionGroup name="list" tag="ul">
          <TodoList
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @complete-todo="$emit('complete-todo', $event)"
            @delete-todo="$emit('delete-todo', $event)"
          />
        </TransitionGroup>
        <TodoActions
          :todos="todos"
          @filter-todos="$emit('filter-todos', $event)"
          @clear-completed="$emit('clear-completed')"
        />
      </div>
    </ul>
    <ul class="todo__filter" v-if="todos.length">
      <TodoFilter @filter-todos="$emit('filter-todos', $event)" />
    </ul>
    <p class="todo__drag" v-if="todos.length">Drag and drop to reorder list</p>
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import TodoActions from './TodoActions.vue';
import TodoFilter from './TodoFilter.vue';
export default {
  name: 'TodoLists',
  props: {
    todos: Array,
  },
  components: {
    TodoInput,
    TodoList,
    TodoActions,
    TodoFilter,
  },
  emits: ['add-todo', 'complete-todo', 'delete-todo', 'filter-todos', 'clear-completed'],
};
</script>
