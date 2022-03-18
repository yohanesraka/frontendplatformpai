<script>
import { mapActions } from 'pinia';
import useAuthStore from '@/stores/auth';

export default {
  provide() {
    return {
      notify: (msg, status = true) => this.notify(msg, status),
    };
  },
  async created() {
    try {
      await this.setUserInfo();
      this.notify(`Welcome back ${this.userInfo.currentUser}!`);
    } catch (error) {
      this.notify(error, false);
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['setUserInfo']),
  },
};
</script>

<template>
  <router-view />
</template>
