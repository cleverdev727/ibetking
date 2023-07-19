<template>
  <div class="flex w-full justify-center mt-5 font-mulish font-bold text-white">
    <div
      class="relative w-[310px] h-[440.4px] pt-16 px-[10px] bg-mobile-pattern-box bg-100%"
      :class="{
        'h-[440.4px]': activeTab == 'password',
        'h-[480.4px]': activeTab == 'otp',
      }"
    >
      <div class="absolute flex justify-center items-center w-[169px] h-[29px] top-0 left-0 bg-mobile-title bg-100%">
        <span class="font-extrabold text-sm leading-[18px] italic">LOG IN</span>
      </div>
      <div>
        <div class="pb-[10px] border-b border-primary mb-[5px]">
          <p class="text-xs text-more-heavy-primary text-center mb-[3px]">Easy Sign In!</p>
          <p class="text-xs leading-5 text-center">
            New to ibetking?
            <span class="text-more-heavy-primary">
              <router-link to="/mobile/signup">Sign Up</router-link>
            </span>
          </p>
        </div>
        <div class="text-xs mb-4">
          <p class="leading-[18px] text-more-heavy-primary text-center mb-[5px]">OR</p>
          <div class="flex justify-between mb-[10px]">
            <button
              class="w-[141.5px] h-[29.5px] bg-100%"
              :class="{
                'bg-mobile-active-half': activeTab == 'password',
                'bg-mobile-inactive-half': activeTab != 'password',
              }"
              @click="switchTab('password')"
            >PASSWORD</button>
            <button
              class="w-[141.5px] h-[29.5px] bg-100%"
              :class="{
                'bg-mobile-active-half': activeTab == 'otp',
                'bg-mobile-inactive-half': activeTab != 'otp',
              }"
              @click="switchTab('otp')"
            >OTP</button>
          </div>
          <div class="mb-[5.5px]">
            <p class="mb-[2px]">Username*</p>
            <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-[21.5px]" v-if="activeTab == 'password'">
            <p class="mb-[2px]">Password*</p>
            <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-[21.5px]" v-else>
            <div class="mb-[5.5px]">
              <p class="mb-[2px]">Mobile No*</p>
              <div class="flex justify-between">
                <div class="flex bg-mobile-inactive-middle w-[175.5px] h-[29.5px] bg-100% px-3">
                  <input type="text" class="outline-none border-none bg-transparent w-full">
                </div>
                <button class="w-[109.5px] h-[29.5px] bg-mobile-active-small bg-100%">SEND OTP</button>
              </div>
            </div>
            <div>
              <p class="mb-[2px]">Enter OTP*</p>
              <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
            </div>
          </div>
          <button class="w-full h-[29.5px] bg-mobile-active bg-100%" @click="$emit('login')">LOG IN</button>
        </div>
        <div class="flex justify-center mb-[10px]">
          <img src="../../assets/telegram.svg" alt="telegram" class="w-8 mr-3 cursor-pointer">
          <img src="../../assets/whatsapp.svg" alt="whatsapp" class="w-8 cursor-pointer">
        </div>
        <p class="text-xs text-center">
          Need to find your <span class="text-more-heavy-primary">username</span> or your <span class="text-more-heavy-primary">passowrd?</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-login-view',
  data() {
    return {
      activeTab: 'password'
    }
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    }
  },
  mounted() {
    this.$emit('logout');
  }
}
</script>