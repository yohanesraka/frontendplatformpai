<script>
import { Form } from 'vee-validate';
import * as Yup from 'yup';

import { inject } from 'vue';
import useAuthStore from '@/stores/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginView',
  components: {
    Form,
  },
  setup() {
    const router = useRouter();
    const auth = useAuthStore();
    const notify = inject('notify');

    async function onSubmit(values) {
      try {
        const login = await auth.callLogin(values);
        if (login === 'Login success!') {
          notify(login);
          router.push({ name: 'Home' });
        } else {
          throw new Error(login);
        }
      } catch (error) {
        notify(error, false);
      }
    }

    const schema = Yup.object().shape({
      email: Yup.string().email().required().label('Email'),
      password: Yup.string().min(3).required().label('Password'),
    });

    return {
      onSubmit,
      schema,
    };
  },
};
</script>

<template>
  <!-- Header -->
  <!-- <div class="header bg-gradient-success py-8 pt-lg-9">
    <div class="container">
      <div class="header-body text-center mb-5">
        <div class="row justify-content-center">
          <div class="col-md-8 px-5">
            <img :src="siteMeta.logo" height="50" />
          </div>
          <div class="col-md-8 px-5">
            <h1 class="text-white">Welcome to {{ siteMeta.title }}!</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="separator separator-bottom separator-skew zindex-100">
      <svg
        x="0"
        y="0"
        viewBox="0 0 2560 100"
        preserveAspectRatio="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </div> -->
  <!-- <div class="row">
    <div class="col-7"> -->
      <div class="container">
        <div class="row mx-0 justify-content-center mt-7">
          <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
              <div class="card-header bg-transparent pb-5">
                <div class="text-muted text-center mt-2 mb-3">
                  <small>Masuk Akun</small>
                </div>
                <Form :validation-schema="schema" @submit="onSubmit">
                  <div>
                    <base-input
                      id="email"
                      alternative
                      name="email"
                      addon-left-icon="fas fa-envelope"
                      placeholder="Email"
                    >
                    </base-input>
                  </div>

                  <base-input
                    alternative
                    name="password"
                    addon-left-icon="fas fa-lock"
                    type="password"
                    placeholder="Password"
                  >
                  </base-input>

                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">
                      Sign in
                    </base-button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div>
    <div class="col-5 bg-light">
      <h2>hallo</h2>
    </div>
  </div> -->
</template>
