<template>
  <!-- <base-header
    v-if="!isFull"
    type="gradient-success"
    class="pb-6 pb-8 pt-5 pt-md-8"
  >
    <div class="col-lg-12 mb-5 p-0">
      <h1 class="display-2 text-white text-center">{{ title }}</h1>
    </div>
  </base-header> -->
  <!-- <div class="container-fluid" :class="[!isFull ? 'mt--7' : '']"> -->
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div v-if="!disableHeaderBody" class="card-header">
            <slot name="header"></slot>
          </div>
          <div class="card-body" :class="{ 'p-0': disablePadding }">
            <slot name="body"></slot>
          </div>
          <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>

  <slot name="modal"></slot>
</template>

<script>
export default {
  name: 'MainLayout',
  props: {
    title: {
      type: String,
      default: 'Main Dashboard Layout',
    },
    disablePadding: {
      type: Boolean,
      default: false,
    },
    disableHeaderBody: {
      type: Boolean,
      default: false,
    },
    // isFull: {
    //   type: Boolean,
    //   default: false,
    // },
  },
};
</script>

<style lang="scss">
.card {
  .card-header {
    h3 {
      margin: 0;
    }
  }
}
</style>
