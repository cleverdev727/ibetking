<template>
  <div class="relative w-full">
    <div
      class="flex justify-between items-center px-5 w-[251px] h-[43px] border-[1.5px] border-white-heavy-opacity rounded-[5px] cursor-pointer" @click="handleToggle()"
    >
      <span class="font-normal capitalize">{{ val }}</span>
      <img src="../../assets/arrow-down.svg" alt="arrow" class="w-4 opacity-50 transition" :class="{'-rotate-90': open}">
    </div>
    <ul class="absolute mt-2 w-full bg-white text-black rounded-[5px] overflow-hidden transition-all" :class="[open ? 'max-h-[600px]' : 'max-h-0']">
      <li
        class="px-5 py-4 hover:bg-light-secondary cursor-pointer capitalize"
        @click="handleSelect('all')"
      >
        all
      </li>
      <li
        v-for="(option, index) in options" :key="index"
        class="px-5 py-4 hover:bg-light-secondary cursor-pointer capitalize"
        @click="handleSelect(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'select-component',
  props: {
    options: Array,
  },
  data() {
    return {
      open: false,
      val: 'all',
    }
  },
  methods: {
    handleToggle() {
      this.open = !this.open;
    },
    handleSelect(option) {
      this.val = option;
      this.open = false;
    }
  }
}
</script>