<template>
  <div class="relative font-bold uppercase">
    <p class="text-3xl text-white text-center">{{ title }}</p>
    <p class="absolute w-full text-center top-1/2 -translate-y-1/2 font-sans text-[55px] leading-[67px] text-transparent text-stroke-2 text-stroke-primary-opacity blur-[1.5px]">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'title-component',
  props: {
    title: String,
  }
}
</script>