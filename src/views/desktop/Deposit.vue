<template>
  <div class="w-full pt-[10px] pr-[10px] font-mulish font-bold text-lg leading-6 text-white">
    <Card title="Deposit">
      <div class="w-full px-[10px] py-[30px]">
        <div class="flex justify-center pb-[30px] border-b border-white-light-opacity mb-5">
          <button
            class="h-[43px] px-[17px] rounded-[5px] mr-[10px] hover:bg-primary hover:text-white"
            :class="{
              'bg-primary': activeTab == 'recharge',
              'bg-primary-opacity text-primary': activeTab != 'recharge'
            }"
            @click="handleClickTab('recharge')"
          >Recharge</button>
          <button
            class="h-[43px] px-[17px] rounded-[5px] hover:bg-primary hover:text-white"
            :class="{
              'bg-primary': activeTab == 'manual',
              'bg-primary-opacity text-primary': activeTab != 'manual'
            }"
            @click="handleClickTab('manual')"
          >Manual Deposit</button>
        </div>
        <div class="flex flex-col items-center pb-[30px] border-b border-white-light-opacity mb-[30px]">
          <div class="flex mb-[30px]">
            <button
              v-for="(list, index) in lists" :key="index"
              class="w-[116px] h-[43px] rounded-[5px] bg-primary-opacity text-primary hover:bg-primary hover:text-white mr-[10px] last:mr-0"
              @click="setAmount(list)"
            >
              ₹{{ list }}
            </button>
          </div>
          <div class="flex flex-col items-center" v-if="activeTab == 'recharge'">
            <div class="flex items-center mb-[30px]">
              <span class="mr-5">Amount<span class="text-danger">*</span> :</span>
              <input type="text" class="px-4 w-[312px] h-[43px] outline-none bg-transparent border border-primary rounded-[5px]" placeholder="mini ₹ 100" v-model="amount">
            </div>
            <div class="flex">
              <button class="w-40 h-[43px] rounded-[5px] bg-primary text-white mr-[10px]">Deposit</button>
              <button class="w-40 h-[43px] rounded-[5px] bg-primary-opacity text-primary hover:bg-primary hover:text-white">Cancel</button>
            </div>
          </div>
          <div class="flex justify-between w-[667px] p-[30px] bg-primary-light-opacity rounded-[5px]" v-else>
            <div class="w-[350px] mt-[10px]">
              <input type="text" class="w-full h-[43px] px-4 outline-none bg-transparent border border-primary rounded-[5px] mb-[30px]" placeholder="₹ Enter Amount" v-model="amount">
              <input type="text" class="w-full h-[43px] px-4 outline-none bg-transparent border border-primary rounded-[5px] mb-[30px]" placeholder="UTR Trasation No">
              <div class="flex justify-between h-[43px]">
                <button class="w-40 h-[43px] rounded-[5px] bg-primary text-white mr-[10px]">Deposit</button>
                <button class="w-40 h-[43px] rounded-[5px] bg-primary-opacity text-primary hover:bg-primary hover:text-white">Cancel</button>
              </div>
            </div>
            <div class="w-[236px]">
              <div class="flex flex-col justify-center items-center h-[199px] bg-primary-light-opacity border-[1.5px] border-primary rounded-[5px] text-primary mb-2 cursor-pointer" @click="handleClickFile()">
                <span class="font-semibold text-[40px] leading-10">+</span>
                <span class="font-bold text-[15px] leading-5">Payment proof screenshot</span>
              </div>
              <p class="font-normal text-[15px] leading-5 text-danger text-center">*Allowed file type JPG,JPEG, PNG</p>
              <input type="file" hidden accept="image/png, image/jpeg" ref="file">
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <p class="max-w-[463px] font-medium text-base leading-5 text-center mb-[30px]">
            Accept, process & disburse digital payments for your business.
            <span class="text-success">Fast & Secure Payment</span>
          </p>
          <div class="flex">
            <button
              v-for="(item, index) in payments" :key="index"
              class="flex justify-center items-center w-[94px] h-[33px] bg-light-secondary rounded-[5px] mr-[10px] last:mr-[10px]"
            >
              <img :src="$getImage(`../assets/${item}.svg`)" :alt="item" class="">
            </button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../../components/desktop/Card.vue';

export default {
    name: "deposit-view",
    data() {
        return {
            activeTab: "recharge",
            amount: null,
            lists: [1000, 2000, 5000, 10000, 15000, 20000, 25000, 50000],
            payments: ["skrill", "visa", "paytm", "bitcoin", "mastercard", "net-banking"],
        };
    },
    methods: {
        handleClickTab(tab) {
            this.activeTab = tab;
        },
        setAmount(amount) {
            this.amount = amount;
        },
        handleClickFile() {
            this.$refs.file.click();
        }
    },
    components: { Card }
}
</script>