<template>
  <main-layout-pemateri>
    <template #header>
      <div class="row">
            <div class="col d-flex justify-content-end">
                <a href="/dashboard/pemateri/course/create">
                    <base-button type="success">Add Course</base-button>
                </a>
            </div>
        </div>
    </template>
    <template #body>
      <!-- <HelloWorld></HelloWorld> -->
      <view-table :data="dummyData" :columns="column" :actions="action" @detail="detail"/>
    </template>
  </main-layout-pemateri>
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
  data: () => ({
    title: 'Home',
    input: {
      id: '',
      name: '',
    },
    dummyData: [
      {
        id: 1,
        name: 'Bima',
      },
      {
        id: 2,
        name: 'Iwan',
      },
      {
        id: 3,
        name: 'Iwan',
      },
    ],
    column: [
      {
        name: 'id',
        th: 'name',
      },
    ],
    action: [
      {
        text: 'detail',
        color: 'info',
        event: 'detail',
      },
    ],
  }),
  methods: {
    detail(row) {
      this.$router.push({ name: 'Show Course', params: { id: row.id } });
    },
  },
};
</script>
