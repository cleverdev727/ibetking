<template>
  <div>
    <div class="flex items-center justify-center h-[53px] bg-white-light-opacity rounded-[5px] font-bold text-sm mb-[10px]">
      <div class="mr-7">
        <p>AVAILABLE</p>
        <p>FOR</p>
      </div>
      <div class="mr-[10px]">
        <p class="text-center">{{ timeLeft[0] }}</p>
        <p class="font-semibold">Days</p>
      </div>
      <div class="mr-2">
        <p class="text-center">{{ timeLeft[1] }}</p>
        <p class="font-semibold">Hours</p>
      </div>
      <div class="mr-[10px]">
        <p class="text-center">{{ timeLeft[2] }}</p>
        <p class="font-semibold">Mins</p>
      </div>
      <div class="mr-[10px]">
        <p class="text-center">{{ timeLeft[3] }}</p>
        <p class="font-semibold">Secs</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 h-[52px] justify-between">
      <button class="bg-primary rounded-[5px]">Get Bonus</button>
      <button class="bg-white-light-opacity rounded-[5px]" @click="$emit('detail')">Details</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'get-bonus-component',
  props: {
    timeLeft: Array,
  }
}
</script>