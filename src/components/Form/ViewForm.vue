<template>
    <div class="card">
  <div class="row">
    <div class="col-md-6">
        <base-input placeholder="name@example.com" alternative></base-input>
    </div>
    <div class="col-md-6">
      <base-input placeholder="Disabled" disabled alternative></base-input>
    </div>
  </div>
   <div class="row">
      <div class="col-md-6">
          <base-input placeholder="Birthday" addon-left-icon="ni ni-zoom-split-in" alternative></base-input>
      </div>
      <div class="col-md-6">
        <base-input placeholder="Birthday" addon-right-icon="ni ni-zoom-split-in" alternative></base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
          <base-input placeholder="Success" :valid="true" alternative></base-input>
      </div>
      <div class="col-md-6">
        <base-input placeholder="Error input" error="Some error" alternative></base-input>
      </div>
    </div>
</div>
</template>
