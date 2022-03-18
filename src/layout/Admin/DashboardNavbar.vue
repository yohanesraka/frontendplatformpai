<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand m-3"
    :class="{ 'bg-gradient-info navbar-dark': type === 'default' }"
  >
    <!-- BreadCrumbs -->
    <div class="navbar-search">
      <route-breadcrumb></route-breadcrumb>
    </div>
    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div
          class="pr-3 sidenav-toggler"
          :class="{
            active: $sidebar.showSidebar,
            'sidenav-toggler-dark': type === 'default',
            'sidenav-toggler-light': type === 'light',
          }"
          @click="toggleSidebar"
        >
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>
      <li class="nav-item d-sm-none">
        <a
          class="nav-link"
          href="#"
          data-action="search-show"
          data-target="#navbar-search-main"
        >
          <i class="ni ni-zoom-split-in"></i>
        </a>
      </li>
    </ul>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        title-classes="nav-link pr-0"
      >
        <template #title-container>
          <a href="#" class="nav-link pr-0" @click.prevent>
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" :src="siteMeta.profile" />
              </span>
              <div class="media-body ml-2 d-none d-lg-block">
                <span class="mb-0 text-sm font-weight-bold">{{
                  userInfo.currentUser ?? 'User'
                }}</span>
              </div>
            </div>
          </a>
        </template>

        <div class="dropdown-header noti-title">
          <h6 class="text-overflow m-0">Welcome!</h6>
        </div>
        <a href="#!" class="dropdown-item">
          <i class="fas fa-user"></i>
          <span>My profile</span>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item text-danger" @click="Logout">
          <i class="fas fa-arrow-right-from-bracket"></i>
          <span>Logout</span>
        </a>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
import BaseNav from '@/components/Navbar/BaseNav.vue';
import RouteBreadcrumb from '@/components/Breadcrumb/RouteBreadCrumb.vue';

import { mapActions } from 'pinia';
import useAuthStore from '@/stores/auth';

export default {
  components: {
    BaseNav,
    RouteBreadcrumb,
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description:
        'Look of the dashboard navbar. Default (Green) or light (gray)',
    },
  },
  data() {
    return {
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
    };
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  methods: {
    ...mapActions(useAuthStore, ['callLogout']),
    async Logout() {
      await this.callLogout();
      this.notify('Logout Successfully');
      this.$router.push({ name: 'Login' });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
  },
};
</script>
