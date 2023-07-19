<template>
  <Teleport to="#app">
    <div class="fixed top-0 w-full h-screen bg-modal-overlay z-50 px-5">
      <div class="relative left-1/2 -translate-x-1/2 w-full h-[180px] bg-little-more-primary font-mulish font-bold text-base text-white rounded-[5px]" :style="`top:${top}px;`">
        <button class="absolute flex justify-center items-center top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-primary rounded-[5px]" @click="$emit('close')">
          <img src="../../assets/close.svg" alt="close" class="w-[15px]">
        </button>
        <div class="flex justify-center items-center h-10 bg-heavy-primary rounded-[5px]">
          <p class="text-center">{{ title }}</p>
        </div>
        <div class="px-2 overflow-x-scroll">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: 'mobile-detail-modal-component',
  props: {
    title: String,
    top: Number,
  },
  mounted() {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.getElementsByTagName('body')[0].style.height = '100vh';
  },
  unmounted() {
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
  }
}
</script>