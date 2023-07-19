<template>
  <div class="flex relative justify-between items-center pl-5 pr-20 h-[75px] bg-primary font-semibold text-lg leading-[22px] text-white">
    <div class="flex items-center">
      <img src="../../assets/menu.svg" alt="menu" class="w-[35px] mr-[34px] cursor-pointer" @click="this.$emit('toggle')">
      <span class="font-bold text-3xl text-white">LOGO</span>
    </div>
    <div>
      <div class="flex text-white" v-if="!loginStatus">
        <button class="w-[123px] h-[47px] clip bg-heavy-primary mr-5">
          <router-link to="/signup">Sign Up</router-link>
        </button>
        <div class="flex w-[123px] h-[47px] clip-reverse bg-white p-[2px]">
          <button class="w-full clip-reverse-small bg-primary">
            <router-link to="/login">Login</router-link>
          </button>
        </div>
      </div>
      <div class="flex text-white" v-else>
        <div
          class="flex items-center justify-between pl-[10px] w-[161px] h-12 bg-middle-heavy-more-opacity border-[1.5px] border-heavy-primary rounded-[10px] mr-[10px]"
        >
          <div class="font-sans font-semibold text-xs text-light-secondary">
            <div class="flex items-center">
              <img src="../../assets/india-rupee.svg" alt="₹" class="w-[15px] mr-[5px]">
              <span class="mr-[5px]">INR</span>
              <img
                src="../../assets/arrow-down.svg"
                alt="arrow"
                class="w-[10px] opacity-80 transition cursor-pointer"
                :class="{'-rotate-90': currencyFlag}"
                @click="handleClickCurrency()"
              >
            </div>
            <span class="ml-5">0.00</span>
          </div>
          <div class="flex items-center justify-center aspect-square	h-full bg-heavy-primary rounded-[10px] cursor-pointer" @click="handleClickWallet()">
            <img src="../../assets/wallet.svg" alt="wallet" class="w-[25px]">
          </div>
        </div>
        <div class="flex w-12 h-12 justify-center items-center bg-heavy-primary rounded-[10px] cursor-pointer" @click="handleClickProfile()">
          <img src="../../assets/avatar.svg" alt="avatar" class="w-5">
        </div>
      </div>
    </div>
    <ul class="absolute flex h-full left-1/2 -translate-x-1/2">
      <li
        class="relative flex px-[27px] before:w-full before:absolute before:h-full before:skew-x-[-34deg] before:left-1/2 before:-translate-x-1/2 hover:before:bg-middle-heavy-opacity"
        v-for="(route, index) in routes" :key="index"
        :class="{
          'before:bg-white hover:before:bg-white text-middle-heavy-primary': currentPath == route.path
        }"
      >
        <router-link :to="route.path" class="flex items-center z-10">
          <span>{{ route.label }}</span>
        </router-link>
      </li>
    </ul>
    <Wallet class="absolute top-full right-20 z-50" v-if="walletOpen" />
    <Profile class="absolute top-full right-20 z-50" v-if="profileOpen" @logout="logout()" @close="handleClickProfile()" />
  </div>
</template>

<script>
import Wallet from './Wallet.vue';
import Profile from './Profile.vue';

export default {
  name: 'header-component',
  components: { Wallet, Profile },
  props: {
    loginStatus: Boolean,
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  data() {
    return {
      routes: [
        {
          id: 'home',
          path: '/',
          label: 'Home'
        },
        {
          id: 'inplay',
          path: '/inplay',
          label: 'InPlay'
        },
        {
          id: 'sportbook',
          path: '/sportbook',
          label: 'Sportbook'
        },
        {
          id: 'livecasino',
          path: '/live-casino',
          label: 'Live Casino'
        },
        {
          id: 'casino',
          path: '/casino',
          label: 'Casino'
        },
      ],
      currencyFlag: false,
      walletOpen: false,
      profileOpen: false,
    }
  },
  methods: {
    handleClickCurrency() {
      this.currencyFlag = !this.currencyFlag;
    },
    handleClickWallet() {
      this.profileOpen = false;
      this.walletOpen = !this.walletOpen;
    },
    handleClickProfile() {
      this.walletOpen = false;
      this.profileOpen = !this.profileOpen;
    },
    logout() {
      this.profileOpen = false;
      this.$emit('logout');
    }
  }
}
</script>