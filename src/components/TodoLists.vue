<template>
  <div class="todo">
    <div class="todo__heading">
      <h3 class="todo__heading-title">todo</h3>
      <button class="btn-theme">
        <img
          :src="isDark ? './images/icon-sun.svg' : './images/icon-moon.svg'"
          alt="Theme Icon"
          class="todo__icon todo__icon--theme"
          @click="$emit('toggle-dark')"
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
      <TransitionGroup name="list" tag="ul" v-else>
        <div v-for="todo in todos" :key="todo.id">
          <TodoList
            :todo="todo"
            @complete-todo="$emit('complete-todo', $event)"
            @delete-todo="$emit('delete-todo', $event)"
          />
        </div>
      </TransitionGroup>
      <TodoActions
        :todos="todos"
        :categories="categories"
        @filter-todos="$emit('filter-todos', $event)"
        @clear-completed="$emit('clear-completed')"
      />
    </ul>
    <ul class="todo__filter">
      <TodoFilter
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
        @filter-todos="$emit('filter-todos', $event)"
      />
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
  props: {
    todos: Array,
    categories: Array,
    isDark: Boolean,
  },
  components: {
    TodoInput,
    TodoList,
    TodoActions,
    TodoFilter,
  },
  emits: [
    'add-todo',
    'complete-todo',
    'delete-todo',
    'filter-todos',
    'clear-completed',
    'toggle-dark',
  ],
};
</script>
