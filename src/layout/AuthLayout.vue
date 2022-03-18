<template>
  <div>
    <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main"
      expand="lg"
    >
      <template #brand>
        <div class="navbar-wrapper">
          <router-link class="navbar-brand" :to="{ name: isLoggedIn ? 'Home' : 'Login' }">
            <img :src="siteMeta.logo" />
          </router-link>
        </div>
      </template>

      <div class="navbar-collapse-header">
        <div class="row">
          <div class="col-6 collapse-brand">
            <router-link to="/">
              <img :src="siteMeta.logo" />
            </router-link>
          </div>
          <div class="col-6 collapse-close">
            <button type="button" class="navbar-toggler" @click="showMenu = false">
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">
            <span class="nav-link-inner--text">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pricing" class="nav-link">
            <span class="nav-link-inner--text">Pricing</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <span class="nav-link-inner--text">Login</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <span class="nav-link-inner--text">Register</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/lock" class="nav-link">
            <span class="nav-link-inner--text">Lock</span>
          </router-link>
        </li>
      </ul>
      <hr class="d-lg-none" />
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/creativetim"
            target="_blank"
            data-toggle="tooltip"
            data-original-title="Like us on Facebook"
          >
            <i class="fab fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/creativetimofficial"
            target="_blank"
            data-toggle="tooltip"
            data-original-title="Follow us on Instagram"
          >
            <i class="fab fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/creativetim"
            target="_blank"
            data-toggle="tooltip"
            data-original-title="Follow us on Twitter"
          >
            <i class="fab fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://github.com/creativetimofficial"
            target="_blank"
            data-toggle="tooltip"
            data-original-title="Star us on Github"
          >
            <i class="fab fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
      </ul>
    </base-nav>

    <div class="main-content">
      <router-view></router-view>
    </div>

    <content-footer />
  </div>
</template>
<script>
import ContentFooter from './ContentFooter.vue';

export default {
  components: {
    ContentFooter,
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: 'login-page',
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.updateBackground();
      },
    },
  },
  beforeUnmount() {
    this.removeBackgroundColor();
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open');
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add('bg-default');
    },
    removeBackgroundColor() {
      document.body.classList.remove('bg-default');
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor();
      }
    },
  },
};
</script>
<style lang="scss">
$scaleSize: 0.8;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}

.main-content .zoomIn {
  animation-name: zoomIn8;
}

@keyframes zoomOut8 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-content .zoomOut {
  animation-name: zoomOut8;
}
</style>
