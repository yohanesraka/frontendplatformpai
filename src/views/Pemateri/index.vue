<template>
  <main-layout>
    <template #header>
      <div class="row align-items-center">
        <div class="col">
          <h3>Dashboard</h3>
        </div>
      </div>
    </template>
    <template #body>
      <h2>Hallo</h2>
    </template>
  </main-layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
//   data: () => ({
//     title: 'Home',
//   }),
};
</script>
