<template>
  <main-layout :title="title">
    <template #header>
      <div class="row align-items-center">
        <div class="col">
          <h3>{{ title }}</h3>
        </div>
      </div>
    </template>
    <template #body>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </template>
  </main-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data: () => ({
    title: 'Home',
  }),
};
</script>
