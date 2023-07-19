<template>
  <div class="w-full py-[10px] px-[5px] font-sans text-white">
    <button class="flex items-center w-full h-10 bg-primary rounded-[5px] mb-[10px]">
      <img src="../../assets/promo-code.svg" alt="promocode" class="w-6 mr-[5px]">
      <span class="font-semibold text-lg leading-6">Promo Code</span>
    </button>
    <div class="grid grid-cols-1 gap-2">
      <BonusCard title="Sports" comment="World ODI 200% Bonus" :timeLeft="timeLeft" class="bg-heavy-purple-bg border-heavy-purple" @detail="openModal('Casino', 'World ODI 200% Bonus', 'sport-2')">
        <img src="../../assets/sport-1.png" alt="sport" class="absolute w-[137px] top-0 right-5">
      </BonusCard>
      <BonusCard title="Casino" comment="Spins Wins 150% Bonus" :timeLeft="timeLeft" class="bg-light-pink-bg border-light-pink">
        <img src="../../assets/spin.png" alt="spin" class="absolute w-[137px] top-0 right-[9px]">
      </BonusCard>
      <BonusCard title="Sports" comment="World ODI 200% Bonus" :timeLeft="timeLeft" class="bg-heavy-blue-bg border-heavy-blue">
        <img src="../../assets/sport-3.png" alt="sport" class="absolute w-[145px] top-0 right-[11px]">
      </BonusCard>
      <BonusCard title="Casino" comment="Spins Wins 150% Bonus" :timeLeft="timeLeft" class="bg-light-purple-bg border-light-purple">
        <img src="../../assets/coins.png" alt="coin" class="absolute w-[138px] top-0 right-[13px]">
      </BonusCard>
      <BonusCard title="Casino" comment="Spins Wins 150% Bonus" :timeLeft="timeLeft" class="bg-light-danger-bg border-light-danger">
        <img src="../../assets/fruit.png" alt="fruit" class="absolute w-[138px] top-0 right-[14px]">
      </BonusCard>
      <BonusCard title="Casino" comment="Spins Wins 150% Bonus" :timeLeft="timeLeft" class="bg-lighter-blue-bg border-lighter-blue">
        <img src="../../assets/speaker.png" alt="speaker" class="absolute w-[176px] top-0 right-[29px]">
      </BonusCard>
      <BonusCard title="Sports" comment="World ODI 200% Bonus" :timeLeft="timeLeft" class="bg-more-light-blue-bg border-more-light-blue">
        <img src="../../assets/sport-4.png" alt="sport" class="absolute w-[158px] top-0 right-[19px]">
      </BonusCard>
      <BonusCard title="Sports" comment="World ODI 200% Bonus" :timeLeft="timeLeft" class="bg-most-light-blue-bg border-most-light-blue">
        <img src="../../assets/sport-5.png" alt="sport" class="absolute w-[145px] top-0 right-4">
      </BonusCard>
      <BonusCard title="Casino" comment="Spins Wins 150% Bonus" :timeLeft="timeLeft" class="bg-more-light-purple-bg border-more-light-purple">
        <img src="../../assets/cashb.png" alt="cashb" class="absolute w-[149px] top-0 right-0">
      </BonusCard>
      <BonusCard title="Sports" comment="World ODI 200% Bonus" :timeLeft="timeLeft" class="bg-more-light-purple-bg border-more-light-purple">
        <img src="../../assets/cashb.png" alt="cashb" class="absolute w-[149px] top-0 right-0">
      </BonusCard>
      <BonusCard title="Casino" comment="Spins Wins 150% Bonus" :timeLeft="timeLeft" class="bg-more-light-warning-bg border-more-light-warning">
        <img src="../../assets/plane.png" alt="plane" class="absolute w-[198px] top-0 right-0">
      </BonusCard>
      <BonusCard title="Sports" comment="World ODI 200% Bonus" :timeLeft="timeLeft" class="bg-most-light-purple-bg border-most-light-purple">
        <img src="../../assets/sport-6.png" alt="sport" class="absolute w-[149px] top-0 right-[27px]">
      </BonusCard>
    </div>
    <BonusDetailModal :timeLeft="timeLeft" :title="selectedTitle" :comment="selectedComment" :img="selectedImg" v-if="open" @close="closeModal()"></BonusDetailModal>
  </div>
</template>

<script>
import BonusCard from '../../components/mobile/BonusCard.vue';
import BonusDetailModal from '../../components/mobile/BonusDetailModal.vue';

export default {
  name: "mobile-bonus-view",
  components: { BonusCard, BonusDetailModal },
  data() {
    return {
      open: false,
      timeLeft: ['00', '07', '28', '54'],
      selectedTitle: '',
      selectedComment: '',
      selectedImg: '',
    }
  },
  methods: {
    openModal(title, comment, img) {
      this.open = true;
      this.selectedTitle = title;
      this.selectedComment = comment;
      this.selectedImg = img;
    },
    closeModal() {
      this.open = false;
    }
  }
}
</script>