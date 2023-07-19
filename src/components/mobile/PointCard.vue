<template>
  <div>
    <div
      class="flex flex-col justify-center items-center w-[46px] h-[29px] border rounded-[5px] cursor-pointer"
      :class="{
        'bg-blue-bg border-blue': flag,
        'bg-pink-bg border-pink': !flag,
      }"
      @click="$emit('placebet', flag, val1)"
    >
      <span class="font-bold text-[9px] leading-[11px]" v-if="val1 != 0">{{ val1 }}</span>
      <span class="text-[8px] leading-[8px]" v-if="val1 != 0">{{ val2 / 1000 }}k</span>
      <img src="../../assets/blue-lock.svg" alt="lock" v-if="val1 == 0 && flag" class="w-3">
      <img src="../../assets/pink-lock.svg" alt="lock" v-if="val1 == 0 && !flag" class="w-3">
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-point-card-component",
  props: {
    flag: Boolean,
    val1: Number,
    val2: Number
  }
}
</script>