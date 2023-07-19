<template>
  <div class="flex w-full justify-center mt-[70px] font-mulish font-bold text-white">
    <div class="relative w-[760px] h-[650.4px] pt-[76px] pl-[43px] pr-[57px] bg-pattern-box bg-100%">
      <div class="absolute flex items-center justify-center w-[431.3px] h-[41.3px] top-0 left-0 bg-title-middle bg-100%">
        <span class="font-extrabold text-2xl italic">SIGN UP</span>
      </div>
      <div>
        <div class="pb-6 border-b border-primary mb-[10px]">
          <p class="text-lg text-more-heavy-primary text-center mb-[5px]">Easy Sign In!</p>
          <p class="text-base leading-5 text-center">
            Visiting for the first time? Get Registered!
          </p>
        </div>
        <div class="text-base leading-5 mb-5">
          <div class="flex justify-between mb-[10px]">
            <div class="w-80">
              <p class="mb-[5px]">Username*</p>
              <div class="flex bg-inactive-middle h-[35px] bg-100% px-5">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
            </div>
            <div class="w-80">
              <p class="mb-[5px]">Password*</p>
              <div class="flex bg-inactive-middle h-[35px] bg-100% px-5">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
            </div>
          </div>
          <div class="flex justify-between mb-[10px]">
            <div class="w-80">
              <p class="mb-[5px]">Mobile No*</p>
              <div class="flex bg-inactive-middle h-[35px] bg-100% px-5">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
            </div>
            <div class="w-80">
              <p class="mb-[5px]">Mobile No*</p>
              <div class="flex bg-inactive-middle h-[35px] bg-100% px-5">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
            </div>
          </div>
          <div class="mb-[10px]">
            <p class="mb-[5px]">Mobile No*</p>
            <div class="flex justify-between">
              <div class="flex bg-inactive-full w-[490px] h-[35px] bg-100% px-5">
                <input type="text" class="outline-none border-none bg-transparent w-full">
              </div>
              <button class="w-40 h-[35px] bg-active-small bg-100%">SEND OTP</button>
            </div>
          </div>
          <div class="mb-[10px]">
            <p class="mb-[5px]">Enter OTP*</p>
            <div class="flex bg-inactive-max h-[35px] bg-100% px-5">
              <input type="text" class="outline-none border-none bg-transparent w-full">
            </div>
          </div>
          <div class="flex mb-5">
            <div
              class="flex shrink-0 justify-center items-center w-[25px] h-[25px] border border-more-heavy-primary rounded-[5px] mr-[10px] cursor-pointer"
              :class="{
                'bg-check': !checked,
                'bg-more-heavy-primary': checked,
              }"
              @click="handleCheck()"
            >
              <img src="../../assets/check.svg" alt="check" class="w-[15px]" v-if="checked">
            </div>
            <p class="text-sm leading-[18px] text-justify">
              By Clicking this button you have confirmed to the
              <span class="text-more-heavy-primary cursor-pointer">Terms & Conditions</span>
              and the
              <span class="text-more-heavy-primary cursor-pointer">Privacy Policy</span>
              of the Company .
            </p>
          </div>
          <div class="flex justify-center">
            <button class="w-[490px] h-[35px] bg-active-full bg-100%">SIGN UP</button>
          </div>
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
  name: 'signup-view',
  mounted() {
    this.$emit('logout');
  },
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    handleCheck() {
      this.checked = !this.checked;
    }
  }
}
</script>