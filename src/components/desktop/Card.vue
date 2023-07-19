<template>
  <div class="w-full bg-primary-light-opacity rounded-[5px]">
    <div class="flex justify-center items-center h-[43px] bg-primary-more-opacity rounded-[5px]">
      <span>{{ title }}</span>
    </div>
    <div class="flex flex-col items-center px-5 pt-5 pb-[10px]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-component',
  props: {
    title: String
  }
}
</script>