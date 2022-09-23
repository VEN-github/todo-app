<template>
  <main>
    <!-- <img src="./assets/images/bg-desktop-light.jpg" alt="Banner image" class="banner" /> -->
    <img src="./assets/images/bg-desktop-dark.jpg" alt="Banner image" class="banner" />
    <div class="container">
      <TodoLists />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/VEN-github">Raven Barrogo</a>.
      </div>
    </div>
  </main>
</template>

<script>
import TodoLists from './components/TodoLists.vue';
export default {
  name: 'App',
  components: {
    TodoLists,
  },
  // mounted() {
  //   this.$nextTick(() => document.getElementById('app').classList.add('dark'));
  // },
};
</script>
