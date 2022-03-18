<template>
  <main-layout>
    <template #header>
      <div class="row">
            <div class="col d-flex justify-content-end">
                <a href="/admin/pemateri/create">
                    <base-button type="success">Add Pemateri</base-button>
                </a>
            </div>
        </div>
    </template>
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
