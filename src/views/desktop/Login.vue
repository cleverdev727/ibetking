<template>
  <div class="flex w-full justify-center mt-[70px] font-mulish font-bold text-white">
    <div
      class="relative w-[590px] pt-[76px] pl-[43px] pr-[57px] bg-pattern-box bg-100%"
      :class="{
        'h-[562.4px]': activeTab == 'password',
        'h-[610.4px]': activeTab == 'otp',
      }"
    >
      <div class="absolute flex items-center justify-center w-[341.3px] h-[41.3px] top-0 left-0 bg-title bg-100%">
        <span class="font-extrabold text-2xl italic">LOG IN</span>
      </div>
      <div>
        <div class="pb-5 border-b border-primary mb-[10px]">
          <p class="text-lg text-more-heavy-primary text-center mb-[5px]">Easy Sign In!</p>
          <p class="text-base leading-5 text-center">
            New to ibetking?
            <span class="text-more-heavy-primary">
              <router-link to="/signup">Sign Up</router-link>
            </span>
          </p>
        </div>
        <div class="text-base leading-5 mb-[18px]">
          <p class="text-sm leading-[18px] text-more-heavy-primary text-center mb-[10px]">OR</p>
          <div class="flex justify-between text-sm leading-[18px] mb-[10px]">
            <button
              class="w-[230px] h-[35px] bg-100%"
              :class="{
                'bg-active': activeTab == 'password',
                'bg-inactive': activeTab != 'password',
              }"
              @click="switchTab('password')"
            >PASSWORD</button>
            <button
              class="w-[230px] h-[35px] bg-100%"
              :class="{
                'bg-active': activeTab == 'otp',
                'bg-inactive': activeTab != 'otp',
              }"
              @click="switchTab('otp')"
            >OTP</button>
          </div>
          <div class="mb-[10px]">
            <p class="mb-[5px]">Username*</p>
            <div class="flex bg-inactive-full w-full h-[35px] bg-100% px-5">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-[25px]" v-if="activeTab == 'password'">
            <p class="mb-[5px]">Password*</p>
            <div class="flex bg-inactive-full w-full h-[35px] bg-100% px-5">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-5" v-else>
            <div class="mb-[10px]">
              <p class="mb-[5px]">Mobile No*</p>
              <div class="flex justify-between">
                <div class="flex bg-inactive-middle w-80 h-[35px] bg-100% px-5">
                  <input type="text" class="outline-none border-none bg-transparent w-full">
                </div>
                <button class="w-40 h-[35px] bg-active-small bg-100%">SEND OTP</button>
              </div>
            </div>
            <div>
              <p class="mb-[5px]">Enter OTP*</p>
              <div class="flex bg-inactive-full w-full h-[35px] bg-100% px-5">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
            </div>
          </div>
          <button class="w-full h-[35px] bg-active-full bg-100%" @click="$emit('login')">LOG IN</button>
        </div>
        <div class="flex justify-center mb-[10px]">
          <img src="../../assets/telegram.svg" alt="telegram" class="w-8 mr-3 cursor-pointer">
          <img src="../../assets/whatsapp.svg" alt="whatsapp" class="w-8 cursor-pointer">
        </div>
        <p class="text-sm leading-[18px] text-center">
          Need to find your <span class="text-more-heavy-primary">username</span> or your <span class="text-more-heavy-primary">passowrd?</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-view',
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