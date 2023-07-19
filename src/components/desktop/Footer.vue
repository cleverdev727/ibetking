<template>
  <div class="w-full bg-footer font-sans font-bold text-sm text-white">
    <div class="flex justify-between items-center py-[23px] border-b-[1.5px] border-white-light-opacity" v-bind="$attrs">
      <span class="font-montserrat text-3xl">LOGO</span>
      <div class="flex">
        <div class="flex mr-[50px]">
          <span class="mr-5">About-Us</span>
          <span class="mr-5">Contact-Us</span>
          <span>Blogs</span>
        </div>
        <div class="flex mr-[50px]">
          <span class="mr-5">Privacy Policy</span>
          <span class="mr-5">KYC Policy</span>
          <span>AML Policy</span>
        </div>
        <div class="flex mr-[50px]">
          <span class="mr-5">Terms & Conditions</span>
          <span class="mr-5">Responsible Gaming</span>
          <span class="mr-5">Underage Policy</span>
          <span>Self Exclusion Policy</span>
        </div>
      </div>
      <div class="flex items-center">
        <span class="mr-[10px]">Follow Us:</span>
        <img src="../../assets/whatsapp.svg" alt="whatsapp" class="w-[30px] mr-[10px]">
        <img src="../../assets/telegram.svg" alt="telegram" class="w-[30px]">
      </div>
    </div>
    <div class="flex flex-col items-center pt-5 pb-[30px]">
      <img src="../../assets/cards.png" alt="cards" class="h-[22px] mb-[5px]">
      <span>Accept, process & disburse digital payments for your business.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-component',
  inheritAttrs: false,
}
</script>