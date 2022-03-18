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
                    <base-input placeholder="Course Name"  addon-left-icon="fa-solid fa-user" alternative disabled></base-input>
                </div>
                <base-input  class="col-md-12" addon-left-icon="fa-solid fa-list">
                    <select class="form-control" disabled>
                        <option selected disabled>Category</option>
                        <option>PAI</option>
                        <option>TAHSIN</option>
                    </select>
                </base-input>
                <div class="col-md-12">
                    <base-input placeholder="Estimasi Pembelajaran" addon-left-icon="fa-solid fa-clock" alternative disabled></base-input>
                </div>
                <div class="col-md-12">
                    <!-- <base-input placeholder="Description" addon-left-icon="fa-solid fa-city" alternative></base-input> -->
                    <base-input label="Description">
                      <textarea class="form-control" rows="4" disabled></textarea>
                    </base-input>
                </div>
                <!-- <div class="col d-flex justify-content-end">
                    <a href="/dashboard/user" class="mx-3">
                        <base-button outline type="danger">Cancel</base-button>
                    </a>
                    <base-button type="info">Submit</base-button>
                </div> -->
            </div>
        </form>
    </div>
    </template>
  </main-layout>
  <main-layout>
    <template #header>
    <div>
      <div class="row">
        <div class="col">
          <h3>List Materi</h3>
        </div>
        <div class="col-md-2 d-flex justify-content-end">
          <base-button
            type="primary"
            block
            class="mb-3"
            @click="modals.classic = true"
            >Add Materi</base-button
          >
        </div>
        <modal v-model:show="modals.classic">
              <template #header>
                <h6 class="modal-title">Add Materi</h6>
              </template>
              <form action="">
                <div class="row">
                  <div class="col-12">
                      <base-input placeholder="Nama Materi"></base-input>
                  </div>
                  <div class="col-12">
                    <div>
                      <h3 class="mb-0">Drop File Pdf</h3>
                    </div>
                    <!--Card Body-->

                    <dropzone-file-upload
                      v-model="inputs.fileSingle"
                    ></dropzone-file-upload>
                  </div>
                </div>
              </form>

              <template #footer>
                <base-button
                  type="link"
                  class="ml-auto"
                  @click="modals.classic = false"
                  >Close</base-button
                >
                <base-button type="primary">Submit</base-button>
              </template>
          </modal>
      </div>
    </div>
    </template>
    <template #body>
      <view-table/>
    </template>
    </main-layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/DataTable.vue';
// import ViewForm from '@/components/Form/ViewForm.vue';
import ViewTable from '@/components/Table/ViewTable.vue';
import modal from '@/components/ModalComp.vue';
import DropzoneFileUpload from '@/components/Inputs/DropzoneFileUpload.vue';

export default {
  name: 'HomeView',
  components: {
    ViewTable,
    modal,
    DropzoneFileUpload,
  },
  // data: () => ({
  //   title: 'Home',
  // }),
  data() {
    return {
      modals: {
        classic: false,
      },
      inputs: {
        fileSingle: [],
      },
    };
  },
};
</script>
