<template>
  <Teleport to="#app">
    <div class="fixed top-0 w-full h-screen bg-modal-overlay z-50">
      <div class="absolute left-1/2 -translate-x-1/2 p-[30px] bg-heavy-primary font-mulish rounded-2xl" :style="`width:${width}px; height:${height}px; top:${top}px;`">
        <button class="absolute flex justify-center items-center top-5 right-[30px] w-[30px] h-[30px] bg-primary rounded-[5px]" @click="$emit('close')">
          <img src="../../assets/close.svg" alt="close" class="w-[13px]">
        </button>
        <p class="font-bold text-2xl leading-[30px] text-center mb-5" :class="`text-${titleColor}`">{{ title }}</p>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: 'modal-component',
  props: {
    title: String,
    titleColor: String,
    width: Number,
    height: Number,
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