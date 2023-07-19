<template>
  <Modal title="Details" titleColor="primary" :width="686" :height="750" :top="105">
    <div class="text-white">
      <div class="relative flex flex-col justify-between px-[30px] py-7 h-[150px] bg-primary-opacity border-2 border-primary rounded-[20px] mb-5">
        <p class="font-bold text-sm text-primary">{{ title }}</p>
        <p class="max-w-[121px] font-bold text-xl">{{ comment }}</p>
        <img :src="$getImage(`../assets/${img}.png`)" :alt="img" class="absolute h-[150px] top-0 right-[19px]">
      </div>
      <div class="p-5 h-[399px] bg-primary-opacity rounded-[20px] mb-5 font-semibold text-base leading-[22px] text-justify">
        <p class="mb-[22px]">New deposit bonus to your service!</p>
        <p>Terms and Conditions</p>
        <ul class="mb-[22px]">
          <li>Min. Deposit - 800 INR/1 mBTC</li>
          <li>Max. Bonus - 300mBTC/24,000 INR</li>
          <li>Wager - x20</li>
          <li>Only slots</li>
          <li>Wager Period - 7 days</li>
        </ul>
        <p class="mb-[22px]">1. Bonus is provided from 1.03.2023 till 1.04.2023.</p>
        <p class="mb-[22px]">2. You can use this bonus only once upon your deposit.</p>
        <p class="">3. Minimum deposit amount to obtain Bonus is 1 mBTC / 800 INR / 60 BRL / 900 BDT</p>
        <p>...</p>
      </div>
      <div class="flex justify-between">
        <div class="flex justify-center items-center w-[303px] h-[54px] bg-primary-opacity rounded-[10px] font-bold text-sm">
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
        <button class="w-[303px] h-[54px] bg-primary rounded-[10px] font-bold text-lg leading-6">Get Bonus</button>
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