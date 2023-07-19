<template>
  <div class="w-full pt-[10px] px-[5px] font-mulish font-bold text-base text-white">
    <Card title="Withdraw" class="mb-[10px]">
      <div class="flex justify-between items-center w-full h-10 px-1 border-2 border-white-light-opacity rounded-[5px] text-xs">
        <div class="flex items-center">
          <span class="mr-[5px]">KYC Status :</span>
          <span
            class="flex items-center h-8 px-2 bg-primary-opacity rounded-[5px] text-primary text-[10px]"
            :class="[
              status == '' ? 'text-primary' : 'text-white',
              {
                'bg-primary-opacity': status == '',
                'bg-danger': status == 'request',
                'bg-success': status == 'approved',
              }
            ]"
          >
            {{ status == '' ? 'Not yet applied' : status == 'request' ? 'Pending' : 'Approved'}}
          </span>
        </div>
        <button
          class="h-8 px-2 bg-primary-opacity rounded-[5px] text-primary hover:bg-primary hover:text-white"
          @click="handleClickKYC()" v-if="status == ''">Complet KYC</button>
      </div>
      <div class="w-full p-2 mt-[10px] border border-white-light-opacity rounded-[5px]" v-if="status == 'request'">
        <div class="w-full">
          <p class="font-normal mb-[10px]">Choose Image :</p>
          <div class="flex flex-col justify-center items-center w-full h-[170px] bg-primary-light-opacity border-[1.5px] border-primary rounded-[5px] mb-[10px] cursor-pointer text-primary" @click="handleClickFront()">
            <span class="font-semibold text-[40px] leading-10">+</span>
            <span class="font-bold text-sm leading-5">Front Image :</span>
          </div>
          <p class="font-normal text-sm leading-5 text-danger text-center">*Allowed file type JPG,JPEG, PNG</p>
          <input type="file" hidden ref="front-file">
        </div>
        <div class="w-full">
          <p class="font-normal mb-[10px]">Choose Image :</p>
          <div class="flex flex-col justify-center items-center w-full h-[170px] bg-primary-light-opacity border-[1.5px] border-primary rounded-[5px] mb-[10px] cursor-pointer text-primary" @click="handleClickBack()">
            <span class="font-semibold text-[40px] leading-10">+</span>
            <span class="font-bold text-sm leading-5">Back Image :</span>
          </div>
          <p class="font-normal text-sm leading-5 text-danger text-center">*Allowed file type JPG,JPEG, PNG</p>
          <input type="file" hidden ref="back-file">
        </div>
        <div class="w-full font-normal">
          <div class="mb-[10px]">
            <p class="mb-[5px]">Document type* :</p>
            <input type="text" class="w-full h-10 px-5 outline-none bg-transparent border border-primary rounded-[5px]" value="Aadhar">
          </div>
          <div class="mb-[10px]">
            <p class="mb-[5px]">Document Number* :</p>
            <input type="text" class="w-full h-10 px-5 outline-none bg-transparent border border-primary rounded-[5px]" value="0123456789">
          </div>
          <div class="grid grid-cols-2 gap-2 font-extrabold text-base leading-5 text-primary">
            <button class="h-10 border border-primary rounded-[5px] hover:bg-primary hover:text-white" @click="kycRequest()">KYC Request</button>
            <button class="h-10 bg-primary-opacity rounded-[5px] hover:bg-primary hover:text-white" @click="cancelRequest()">Cancel</button>
          </div>
        </div>
      </div>
    </Card>
    <Card title="Bank Details :">
      <div class="w-full px-2 pb-[10px]">
        <div class="grid grid-cols-1 gap-2 text-base leading-5 mb-[10px]">
          <div>
            <p class="mb-[5px]">Bank Name :</p>
            <input type="text" class="w-full h-10 px-[30px] outline-none border-none bg-primary-opacity rounded-[5px]" placeholder="Enter Your Bank Name">
          </div>
          <div>
            <p class="mb-[5px]">Bank Account Number :</p>
            <input type="text" class="w-full h-10 px-[30px] outline-none border-none bg-primary-opacity rounded-[5px]" placeholder="Enter Your Bank Account  Number">
          </div>
          <div>
            <p class="mb-[5px]">Bank IFSC Code :</p>
            <input type="text" class="w-full h-10 px-[30px] outline-none border-none bg-primary-opacity rounded-[5px]" placeholder="Enter Your Bank IFSC Code">
          </div>
          <div>
            <p class="mb-[5px]">Account Holder Name :</p>
            <input type="text" class="w-full h-10 px-[30px] outline-none border-none bg-primary-opacity rounded-[5px]" placeholder="Enter Your Account Holder Name">
          </div>
          <div>
            <p class="mb-[5px]">Mobile Number :</p>
            <input type="text" class="w-full h-10 px-[30px] outline-none border-none bg-primary-opacity rounded-[5px]" placeholder="Enter Your Mobile Number">
          </div>
          <div>
            <div class="flex flex-col mb-[5px]">
              <div class="flex">
                <span class="mr-[5px]">Withdraw Amount :</span>
                <span class="text-most-light-secondary">(Mini ₹1000)</span>
              </div>
              <div class="flex">
                <span>Available Balance :  <span class="text-success">₹10,856</span></span>
              </div>
            </div>
            <input type="text" class="w-full h-10 px-[30px] outline-none border-none bg-primary-opacity rounded-[5px]" placeholder="Enter Your Withdraw Amount">
          </div>
        </div>
        <div class="text-base mb-[10px]">
          <p class="mb-[5px]">Desscription :</p>
          <textarea class="w-full h-[100px] p-[10px] bg-primary-opacity rounded-[5px] outline-none" placeholder="Enter Your Message"></textarea>
        </div>
        <button class="w-full h-10 border border-primary rounded-[5px] font-extrabold text-base text-primary hover:bg-primary hover:text-white">Withdraw Request</button>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../../components/mobile/Card.vue';

export default {
  name: "mobile-withdraw-view",
  components: { Card },
  data() {
    return {
      status: '',
    }
  },
  methods: {
    handleClickKYC() {
      this.status = 'request';
    },
    kycRequest() {
      this.status = 'approved';
    },
    cancelRequest() {
      this.status = '';
    },
    handleClickFront() {
      this.$refs['front-file'].click();
    },
    handleClickBack() {
      this.$refs['back-file'].click();
    },
  }
}
</script>