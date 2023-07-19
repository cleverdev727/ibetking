<template>
  <div class="flex w-full justify-center mt-5 font-mulish font-bold text-white">
    <div class="relative w-[310px] h-[638.4px] pt-16 px-[10px] bg-mobile-signup-pattern-box bg-100%">
      <div class="absolute flex justify-center items-center w-[169px] h-[29px] top-0 left-0 bg-mobile-title bg-100%">
        <span class="font-extrabold text-sm leading-[18px] italic">SIGN UP</span>
      </div>
      <div>
        <div class="pb-[10px] border-b border-primary mb-[10px]">
          <p class="text-xs text-more-heavy-primary text-center mb-[3px]">Easy Sign In!</p>
          <p class="text-xs text-center">
            Visiting for the first time? Get Registered!
          </p>
        </div>
        <div class="text-xs mb-5">
          <div class="mb-[5.5px]">
            <p class="mb-[2px]">Username*</p>
            <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-[5.5px]">
            <p class="mb-[2px]">Email ID*</p>
            <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-[5.5px]">
            <p class="mb-[2px]">Birthdate*</p>
            <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-[5.5px]">
            <p class="mb-[2px]">Password*</p>
            <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="mb-[5.5px]">
            <p class="mb-[2px]">Mobile No*</p>
            <div class="flex justify-between">
              <div class="flex bg-mobile-inactive-middle w-[175.5px] h-[29.5px] bg-100% px-3">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
              <button class="w-[109.5px] h-[29.5px] bg-mobile-active-small bg-100%">SEND OTP</button>
            </div>
          </div>
          <div class="mb-[10px]">
            <p class="mb-[2px]">OTP*</p>
            <div class="flex bg-mobile-inactive w-full h-[29.5px] bg-100% px-3">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="flex mb-5">
            <div
              class="flex shrink-0 justify-center items-center w-5 h-5 border border-more-heavy-primary rounded-[5px] mr-[9px]"
              :class="{
                'bg-check': !checked,
                'bg-more-heavy-primary': checked,
              }"
              @click="handleCheck()"
            >
              <img src="../../assets/check.svg" alt="check" class="w-3" v-if="checked">
            </div>
            <p class="leading-[15px] text-justify">
              By Clicking this button you have confirmed to the
              <span class="text-more-heavy-primary cursor-pointer">Terms & Conditions</span>
              and the
              <span class="text-more-heavy-primary cursor-pointer">Privacy Policy</span>
              of the Company .
            </p>
          </div>
          <button class="w-full h-[29.5px] bg-mobile-active bg-100%">SIGN UP</button>
        </div>
        <div class="flex justify-center mb-[10px]">
          <img src="../../assets/telegram.svg" alt="telegram" class="w-8 mr-3 cursor-pointer">
          <img src="../../assets/whatsapp.svg" alt="whatsapp" class="w-8 cursor-pointer">
        </div>
        <p class="text-xs text-center">
          You Have Already Account? <span class="text-more-heavy-primary">Login</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-signup-view',
  data() {
    return {
      checked: false,
    }
  },
  mounted() {
    this.$emit('logout');
  },
  methods: {
    handleCheck() {
      this.checked = !this.checked;
    }
  }
}
</script>