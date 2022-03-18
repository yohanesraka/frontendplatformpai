<template>
  <main-layout>
    <template #header>
      <div class="row align-items-center">
        <div class="col">
          <h3>Course</h3>
        </div>
      </div>
    </template>
    <template #body>
      <!-- <HelloWorld></HelloWorld> -->
    <div class="">
        <form action="">
            <div class="row">
                <div class="col-md-12">
                    <base-input placeholder="Course Name"  addon-left-icon="fa-solid fa-user" alternative></base-input>
                </div>
                <base-input  class="col-md-12" addon-left-icon="fa-solid fa-list">
                    <select class="form-control">
                        <option selected disabled>Category</option>
                        <option>PAI</option>
                        <option>TAHSIN</option>
                    </select>
                </base-input>
                <div class="col-md-12">
                    <base-input placeholder="Estimasi Pembelajaran" addon-left-icon="fa-solid fa-clock" alternative></base-input>
                </div>
                <div class="col-md-12">
                    <!-- <base-input placeholder="Description" addon-left-icon="fa-solid fa-city" alternative></base-input> -->
                    <base-input label="Description">
                      <textarea class="form-control" rows="4"></textarea>
                    </base-input>
                </div>
                <div class="col d-flex justify-content-end">
                    <a href="/dashboard/user" class="mx-3">
                        <base-button outline type="danger">Cancel</base-button>
                    </a>
                    <base-button type="info">Submit</base-button>
                </div>
            </div>
        </form>
    </div>
    </template>
  </main-layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/DataTable.vue';
// import ViewForm from '@/components/Form/ViewForm.vue';

export default {
  name: 'HomeView',
//   components: {
//     ViewForm,
//   },
  // data: () => ({
  //   title: 'Home',
  // }),
};
</script>
