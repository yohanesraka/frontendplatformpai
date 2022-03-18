<template>
  <main-layout>
    <template #header>
      <div class="row align-items-center">
        <div class="col">
          <h3>Add Student</h3>
        </div>
      </div>
    </template>
    <template #body>
      <!-- <HelloWorld></HelloWorld> -->
    <div class="card">
        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <base-input placeholder="Name"  addon-left-icon="fa-solid fa-user" alternative></base-input>
                </div>
                <div class="col-md-6">
                    <base-input placeholder="Phone Number" addon-left-icon="fa-solid fa-phone" alternative></base-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <base-input placeholder="Mail" addon-left-icon="fa-solid fa-envelope" alternative></base-input>
                </div>
                <div class="col-md-6">
                    <base-input placeholder="Country" addon-left-icon="fa-solid fa-city" alternative></base-input>
                </div>
            </div>
            <div class="row">
                <base-input  class="col-md-6" addon-left-icon="fa-solid fa-user-group">
                    <select class="form-control">
                        <option selected disabled>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </base-input>
                <div class="col-md-6">
                    <base-input placeholder="Password" addon-left-icon="fa-solid fa-lock" alternative></base-input>
                </div>
            </div>
            <div class="row">
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
