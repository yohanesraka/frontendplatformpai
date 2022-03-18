<template>
  <main-layout>
    <!-- <template #header>
      <div class="row align-items-center">
        <div class="col">
          <h3>{{ title }}</h3>
        </div>
      </div>
    </template> -->
    <template #body>
      <!-- <HelloWorld></HelloWorld> -->
      <view-table/>
    </template>
  </main-layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/DataTable.vue';
import ViewTable from '@/components/Table/ViewTable.vue';

export default {
  name: 'HomeView',
  components: {
    ViewTable,
  },
  // data: () => ({
  //   title: 'Home',
  // }),
};
</script>
