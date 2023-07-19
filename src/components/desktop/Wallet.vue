<template>
  <div class="w-[358px] h-[166px] p-[10px] bg-little-more-primary rounded-[10px]">
    <div class="h-full px-[15px] bg-heavy-primary rounded-[10px] font-mulish font-bold text-light-secondary">
      <div class="pt-[11px] pb-3 border-b border-white-opacity">
        <div class="flex items-center mb-[10px]">
          <img src="../../assets/india-rupee.svg" alt="₹" class="w-[25px] mr-[10px]">
          <span class="text-base leading-5">Indian rupee</span>
        </div>
        <div class="flex">
          <span class="text-2xl mr-3">0 INR</span>
          <span class="flex self-end text-xs">Available Balance</span>
        </div>
      </div>
      <div class="flex pt-[10px] pb-[13px]">
        <div class="mr-[30px]">
          <p class="text-base">0 INR</p>
          <p class="text-xs text-white-opacity">My Credit</p>
        </div>
        <div class="mr-[30px]">
          <p class="text-base">0 INR</p>
          <p class="text-xs text-white-opacity">Exposure</p>
        </div>
        <div>
          <p class="text-base">0 INR</p>
          <p class="text-xs text-white-opacity">Bonus Balance</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wallet-component',
}
</script>