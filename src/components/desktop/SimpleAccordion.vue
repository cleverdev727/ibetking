<template>
  <div class="w-full rounded-[5px]" :class="`bg-${bodyBg}`">
    <div
      class="flex justify-between items-center px-5 h-[43px] rounded-[5px] cursor-pointer"
      :class="`bg-${headerBg}`"
      @click="handleClick()"
    >
      <span>{{ title }}</span>
      <img src="../../assets/arrow-down.svg" alt="arrow" class="w-[14px] transition" :class="{ '-rotate-90': open }">
    </div>
    <div
      class="px-5 overflow-hidden transition-all"
      :class="[open ? `py-5 max-h-${this.bodyMaxheight}` : 'max-h-0']"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-accordion-component',
  props: {
    title: String,
    headerBg: String,
    bodyBg: String,
    bodyMaxheight: Number,
  },
  data() {
    return {
      open: true,
    }
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    }
  }
}
</script>