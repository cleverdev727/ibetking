<template>
  <div class="relative flex justify-between px-[5px] py-[7px] items-center bg-primary font-semibold text-xs text-white">
    <div class="flex items-center">
      <img src="../../assets/menu.svg" alt="menu" class="w-[21px] mr-[15px]" @click="this.$emit('toggle')">
      <span class="font-bold text-base">LOGO</span>
    </div>
    <div>
      <div class="flex" v-if="!loginStatus">
        <button class="w-[82px] h-[31px] clip-mobile bg-heavy-primary mr-[5px]">
          <router-link to="/mobile/signup">Sign Up</router-link>
        </button>
        <div class="flex w-[82px] h-[31px] clip-reverse-mobile bg-white p-[1px]">
          <button class="w-full clip-reverse-small-mobile bg-primary">
            <router-link to="/mobile/login">Login</router-link>
          </button>
        </div>
      </div>
      <div class="flex" v-else>
        <div
          class="flex items-center justify-between pl-2 w-[120px] h-[35px] bg-middle-heavy-more-opacity border border-heavy-primary rounded-[5px] mr-[6px]"
        >
          <div class="font-sans font-semibold text-[8px] leading-[11px] text-light-secondary">
            <div class="flex items-center">
              <img src="../../assets/india-rupee.svg" alt="₹" class="w-[11px] mr-1">
              <span class="mr-1">INR</span>
              <img
                src="../../assets/arrow-down.svg"
                alt="arrow"
                class="w-2 opacity-80 transition cursor-pointer"
                :class="{'-rotate-90': currencyFlag}"
                @click="handleClickCurrency()"
              >
            </div>
            <span class="ml-[15px]">0.00</span>
          </div>
          <div class="flex items-center justify-center aspect-square	h-full bg-heavy-primary rounded-[5px] cursor-pointer" @click="handleClickWallet()">
            <img src="../../assets/wallet.svg" alt="wallet" class="w-[18px]">
          </div>
        </div>
        <div class="flex w-[35px] h-[35px] justify-center items-center bg-heavy-primary rounded-[5px] cursor-pointer" @click="handleClickProfile()">
          <img src="../../assets/avatar.svg" alt="avatar" class="w-[15px]">
        </div>
      </div>
    </div>
    <Wallet class="absolute top-full right-[5px] z-50" v-if="walletOpen" />
    <Profile class="absolute top-full right-[5px] z-50" v-if="profileOpen" @logout="logout()" @close="handleClickProfile()" />
  </div>
</template>

<script>
import Wallet from '../mobile/Wallet.vue';
import Profile from '../mobile/Profile.vue';

export default {
  name: 'mobile-header-component',
  components: { Wallet, Profile },
  props: {
    loginStatus: Boolean,
  },
  data() {
    return {
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