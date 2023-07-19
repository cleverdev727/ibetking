<template>
  <div class="relative font-montserrat">
    <Header @toggle="toggleSideBar" @logout="logout()" class="hidden md:flex" :loginStatus="loginStatus" />
    <MobileHeader @toggle="toggleSideBar" @logout="logout()" class="flex md:hidden" :loginStatus="loginStatus" />
    <div class="relative min-h-[calc(100vh-45px)] md:min-h-[calc(100vh-75px)] bg-dark">
      <div class="flex">
        <Sidebar class="mt-[10px] mr-[10px] hidden md:block" :open="sidebarOpen" v-if="sidebarShow" />
        <div class="w-full flex flex-grow" :class="{ 'md:mr-[10px]': collapseShow }">
          <router-view :flag="sidebarOpen || collapseBlockOpen" @login="login()" @logout="logout()" :class="{ 'opacity-40 md:opacity-100': sidebarOpen }" />
        </div>
        <CollapseBlock class="mt-[10px] hidden md:block" :open="collapseBlockOpen" @toggle="toggleCollapse()" v-if="collapseShow" />
      </div>
      <div v-if="path == '/' || path == '/mobile'" :class="{ 'opacity-40 md:opacity-100': sidebarOpen }">
        <PopularGames
          :flag="sidebarOpen && collapseBlockOpen"
          class="mt-10 mb-[46px] hidden md:block"
          :class="{
            'pl-64 max-3xl:pl-[290px]': sidebarOpen,
            'pl-[70px]': !sidebarOpen,
            'pr-64 max-3xl:pr-[290px]': collapseBlockOpen,
            'pr-[70px]': !collapseBlockOpen,
          }"
        />
        <MobilePopularGames
          class="px-[5px] mt-[25.5px] mb-[27px] grid md:hidden"
        />
        <GamblingFeatures
          class="mb-5 hidden md:block"
          :class="{
            'pl-64 max-3xl:pl-[290px]': sidebarOpen,
            'pl-[70px]': !sidebarOpen,
            'pr-64 max-3xl:pr-[290px]': collapseBlockOpen,
            'pr-[70px]': !collapseBlockOpen,
          }"
        />
        <MobileGamblingFeatures
          class="px-[5px] mb-[10px] block md:hidden"
        />
        <div class="hidden md:flex">
          <Provider
            :flag="sidebarOpen || collapseBlockOpen"
            :class="{
              'pl-64 max-3xl:pl-[290px]': sidebarOpen,
              'pl-[70px]': !sidebarOpen,
              'pr-64 max-3xl:pr-[290px]': collapseBlockOpen,
              'pr-[70px]': !collapseBlockOpen,
            }"
          />
        </div>
        <MobileProvider class="block md:hidden" />
      </div>
      <div class="hidden md:flex mt-5" v-if="footerShow">
        <Footer
          :class="{
            'pl-64 max-3xl:pl-[290px]': sidebarOpen,
            'pl-[70px]': !sidebarOpen,
            'pr-64 max-3xl:pr-[290px]': collapseBlockOpen,
            'pr-[70px]': !collapseBlockOpen,
          }"
        />
      </div>
      <MobileFooter class="mt-[10px] px-[5px] block md:hidden" v-if="$route.path != '/mobile/login' && $route.path != '/mobile/signup'" :class="{ 'opacity-40 md:opacity-100': sidebarOpen }" />
      <MobileSidebar class="block md:hidden" :open="sidebarOpen" @toggle="toggleSideBar" />
    </div>
  </div>
</template>

<script>
import CollapseBlock from './components/desktop/CollapseBlock.vue';
import Footer from './components/desktop/Footer.vue';
import MobileFooter from './components/mobile/Footer.vue';
import GamblingFeatures from './components/desktop/GamblingFeatures.vue';
import MobileGamblingFeatures from './components/mobile/GamblingFeatures.vue';
import Header from './components/desktop/Header.vue'
import MobileHeader from './components/mobile/Header.vue';
import PopularGames from './components/desktop/PopularGames.vue';
import MobilePopularGames from './components/mobile/PopularGames.vue';
import Provider from './components/desktop/Provider.vue';
import MobileProvider from './components/mobile/Provider.vue';
import Sidebar from './components/desktop/Sidebar.vue';
import MobileSidebar from './components/mobile/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Header,
    MobileHeader,
    Sidebar,
    MobileSidebar,
    CollapseBlock,
    PopularGames,
    MobilePopularGames,
    GamblingFeatures,
    MobileGamblingFeatures,
    Provider,
    MobileProvider,
    Footer,
    MobileFooter,
  },
  data() {
    return {
      sidebarOpen: false,
      collapseBlockOpen: true,
      loginStatus: localStorage.getItem('loginStatus') || false,
      noSidebarPaths: [ '/login', '/signup' ],
      noCollapsePaths: [ '/login', '/signup', '/account', '/deposit', '/withdraw', '/transactions', '/statement', '/exposure', '/bet-history', '/bonus' ],
      noFooterPaths: [ '/login', '/signup', '/account', '/deposit', '/withdraw', '/transactions', '/statement', '/exposure', '/bet-history' ],
    }
  },
  computed: {
    path() {
      return this.$route.path;
    },
    sidebarShow() {
      return this.noSidebarPaths.indexOf(this.path) == -1;
    },
    collapseShow() {
      return this.noCollapsePaths.indexOf(this.path) == -1;
    },
    footerShow() {
      return this.noFooterPaths.indexOf(this.path) == -1;
    },
  },
  methods: {
    toggleSideBar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleCollapse() {
      this.collapseBlockOpen = !this.collapseBlockOpen;
    },
    login() {
      this.loginStatus = true;
      localStorage.setItem('loginStatus', true);
      const path = this.$route.path;
      path.indexOf('mobile') == -1 && this.$router.push('/');
      path.indexOf('mobile') > -1 && this.$router.push('/mobile');
    },
    logout() {
      this.loginStatus = false;
      localStorage.setItem('loginStatus', false);
      const path = this.$route.path;
      if (path != '/login' && path != '/signup' && path != '/mobile/login' && path != '/mobile/signup') {
        path.indexOf('mobile') == -1 && this.$router.push('/login');
        path.indexOf('mobile') > -1 && this.$router.push('/mobile/login');
      }
    }
  }
}
</script>