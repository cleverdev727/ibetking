<template>
  <div class="w-[228px] h-[105px] p-[3px] bg-little-more-primary rounded-[5px]">
    <div class="h-full px-[10px] bg-heavy-primary rounded-[5px] font-mulish font-bold text-light-secondary">
      <div class="pt-[10px] pb-[5px] border-b border-white-opacity">
        <div class="flex items-center mb-[5px]">
          <img src="../../assets/india-rupee.svg" alt="₹" class="w-5 mr-[5px]">
          <span class="text-[10px] leading-[13px]">Indian rupee</span>
        </div>
        <div class="flex">
          <span class="text-xs mr-[5px]">0 INR</span>
          <span class="flex self-end text-[8px] leading-[10px]">Available Balance</span>
        </div>
      </div>
      <div class="flex justify-between pt-[5px] pb-[11px]">
        <div>
          <p class="text-xs">0 INR</p>
          <p class="text-[8px] leading-[10px] text-white-opacity">My Credit</p>
        </div>
        <div>
          <p class="text-xs">0 INR</p>
          <p class="text-[8px] leading-[10px] text-white-opacity">Exposure</p>
        </div>
        <div>
          <p class="text-xs">0 INR</p>
          <p class="text-[8px] leading-[10px] text-white-opacity">Bonus Balance</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-wallet-component',
}
</script>