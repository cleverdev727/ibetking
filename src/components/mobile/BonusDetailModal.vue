<template>
  <Modal title="Details" titleColor="primary" :width="300" :height="630" :top="105">
    <div class="text-white">
      <div class="relative flex flex-col justify-between px-[10px] py-5 h-[150px] bg-primary-opacity border-2 border-primary rounded-[10px] mb-5">
        <p class="font-bold text-sm text-primary">{{ title }}</p>
        <p class="max-w-[121px] font-bold text-xl">{{ comment }}</p>
        <img :src="$getImage(`../assets/${img}.png`)" :alt="img" class="absolute h-[150px] top-0 right-0">
      </div>
      <div class="p-5 h-[240px] bg-primary-opacity rounded-[10px] mb-5 font-semibold text-base text-justify">
        <p class="mb-[10px]">New deposit bonus to your service!</p>
        <p>Terms and Conditions</p>
        <ul class="mb-[5px] list-disc px-4">
          <li>Min. Deposit - 800 INR/1 mBTC</li>
          <li>Max. Bonus - 300mBTC/24,000 INR</li>
        </ul>
        <p>...</p>
      </div>
      <div>
        <div class="flex justify-center items-center w-full h-[54px] bg-primary-opacity rounded-[5px] font-bold text-sm mb-4">
          <div class="mr-[30px]">
            <p>AVAILABLE</p>
            <p>FOR</p>
          </div>
          <div class="mr-[10px]">
            <p class="text-center">{{ timeLeft[0] }}</p>
            <p class="font-semibold">Days</p>
          </div>
          <div class="mr-[10px]">
            <p class="text-center">{{ timeLeft[1] }}</p>
            <p class="font-semibold">Hours</p>
          </div>
          <div class="mr-[10px]">
            <p class="text-center">{{ timeLeft[2] }}</p>
            <p class="font-semibold">Mins</p>
          </div>
          <div>
            <p class="text-center">{{ timeLeft[3] }}</p>
            <p class="font-semibold">Secs</p>
          </div>
        </div>
        <button class="w-full h-10 bg-primary rounded-[5px] font-bold text-base">Get Bonus</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: "bonus-detail-modal-component",
  components: { Modal },
  props: {
    title: String,
    comment: String,
    timeLeft: Array,
    img: String,
  }
}
</script>