<template>
  <div class="wrapper">
    <side-bar>
      <template #links>

        <!-- dashboard -->
        <sidebar-item
          :link="{
            name: 'Dashboards',
            icon: 'fa-solid fa-desktop',
            path: '/pemateri',
          }"
        >
        </sidebar-item>
          <!-- <sidebar-item :link="{ name: 'Dashboard', path: '/dashboard/admin' }" /> -->
          <!-- <sidebar-item :link="{ name: 'Alternative', path: '/alternative' }" /> -->

        <!-- <sidebar-item
          :link="{
            name: 'About',
            icon: 'fas fa-home text-primary',
            path: '/dashboard/about',
          }"
        /> -->

        <!-- discussion -->
        <sidebar-item
          :link="{
            name: 'Discussion',
            icon: 'fa-solid fa-comment',
            path: '/pemateri/discussion',
          }"
        >
        </sidebar-item>
          <!-- <sidebar-item :link="{ name: 'List Discussion', path: '/discussion' }" /> -->

        <!-- course -->
        <sidebar-item
          :link="{
            name: 'Course',
            icon: 'fa-solid fa-book-open',
          }"
        >
          <sidebar-item :link="{ name: 'List Course', path: '/pemateri/course' }" />
          <sidebar-item :link="{ name: 'Examination', path: '/pemateri/course/exam' }" />
          <sidebar-item :link="{ name: 'Assessment', path: '/pemateri/course/assessment' }" />
        </sidebar-item>

      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <main @click="$sidebar.displaySidebar(false)">
        <router-view></router-view>
      </main>
      <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import DashboardNavbar from './DashboardNavbar.vue';
// import ContentFooter from './ContentFooter.vue';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

export default {
  components: {
    DashboardNavbar,
    // ContentFooter,
  },
  mounted() {
    this.initScrollbar();
  },
  methods: {
    initScrollbar() {
      const isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        initScrollbar('sidenav');
      }
    },
  },
};
</script>
<style lang="scss"></style>
