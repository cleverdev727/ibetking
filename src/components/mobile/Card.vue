<template>
  <div class="w-full bg-primary-light-opacity rounded-[5px]">
    <div class="flex justify-center items-center h-8 bg-primary-more-opacity rounded-[5px]">
      <span>{{ title }}</span>
    </div>
    <div class="flex flex-col items-center px-[2px] py-[5px]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-card-component',
  props: {
    title: String
  }
}
</script>