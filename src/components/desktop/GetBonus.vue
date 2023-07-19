<template>
  <div>
    <div class="flex items-center justify-center h-[53px] bg-white-light-opacity rounded-[10px] font-bold text-sm mb-[10px]">
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
    <div class="flex h-[52px] justify-between">
      <button class="w-36 bg-primary rounded-[10px]">Get Bonus</button>
      <button class="w-36 bg-white-light-opacity rounded-[10px]" @click="$emit('detail')">Details</button>
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