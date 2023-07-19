<template>
  <Teleport to="#app">
    <div class="fixed top-0 w-full h-screen bg-modal-overlay z-50">
      <div class="absolute left-1/2 -translate-x-1/2 w-[1524px] h-[180px] bg-little-more-primary font-mulish font-bold text-lg leading-6 text-white rounded-[5px]" :style="`top:${top}px;`">
        <button class="absolute flex justify-center items-center top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[35px] h-[35px] bg-primary rounded-[5px]" @click="$emit('close')">
          <img src="../../assets/close.svg" alt="close" class="w-[15px]">
        </button>
        <div class="flex items-center h-[43px] bg-heavy-primary rounded-[5px]">
          <p class="text-center">{{ title }}</p>
        </div>
        <div class="px-[50px]">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: 'detail-modal-component',
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