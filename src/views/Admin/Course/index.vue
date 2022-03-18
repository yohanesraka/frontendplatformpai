<template>
  <main-layout>
    <template #header>
      <div class="row">
            <div class="col d-flex justify-content-end">
                <a href="/admin/course/create">
                    <base-button type="success">Add Course</base-button>
                </a>
                <!-- <img alt="Image placeholder" :src="siteMeta.profile" /> -->
            </div>
        </div>
    </template>
    <template #body>
      <!-- <HelloWorld></HelloWorld> -->
      <view-table :data="getName" :columns="column" :actions="action" @detail="detail"/>
    </template>
  </main-layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/DataTable.vue';
import ViewTable from '@/components/Table/ViewTable.vue';
import useCourseStore from '@/stores/course';

export default {
  name: 'HomeView',
  components: {
    ViewTable,
  },
  setup() {
    const course = useCourseStore();

    const { getName } = course;
    return {
      course,
      getName,
    };
  },
  data: () => ({
    title: 'Home',
    input: {
      id: '',
      name: '',
    },
    column: [
      {
        name: 'name',
        th: 'name',
      },
    ],
    action: [
      {
        text: 'detail',
        color: 'info',
        event: 'detail',
      },
      {
        text: 'edit',
        color: 'warning',
        event: 'edit',
      },
      {
        text: 'delete',
        color: 'danger',
        event: 'delete',
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
