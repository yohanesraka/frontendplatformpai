<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Sign up with credentials</small>
          </div>
          <form role="form">
            <base-input
              v-model="input.name"
              form-classes="input-group-alternative"
              placeholder="Name"
              addon-left-icon="ni ni-hat-3"
            >
            </base-input>

            <base-input
              v-model="input.email"
              form-classes="input-group-alternative"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              focused
            >
            </base-input>

            <base-input
              v-model="input.password"
              form-classes="input-group-alternative"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
            >
            </base-input>

            <div class="text-muted font-italic">
              <small>
                password strength:
                <span class="text-success font-weight-700">strong</span>
              </small>
            </div>

            <div class="row my-4">
              <div class="col-12">
                <base-checkbox class="custom-control-alternative">
                  <span class="text-muted">
                    I agree with the <a href="#!">Privacy Policy</a>
                  </span>
                </base-checkbox>
              </div>
            </div>
            <div class="text-center">
              <base-button type="primary" class="my-4">
                Create account
              </base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/login" class="text-light">
            <small>Login into your account</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegisterView',
  data: () => ({
    input: {
      name: '',
      email: '',
      password: '',
    },
  }),
};
</script>
<style></style>
