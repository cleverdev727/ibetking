<template>
  <div class="flex items-start w-full pt-[10px] pr-[10px] font-mulish font-bold text-white">
    <div class="relative flex flex-col items-center w-[546px] p-5 bg-primary-light-opacity rounded-[10px] mr-[10px]">
      <div class="absolute top-[10px] right-5 flex items-center h-[34px] px-[10px] bg-primary rounded-[5px] cursor-pointer" @click="$emit('logout')">
        <span class="text-base leading-5 mr-[5px]">Logout</span>
        <img src="../../assets/logout.svg" alt="logout" class="w-[18px]">
      </div>
      <div class="flex justify-center items-center w-[86px] h-[88.5px] bg-primary-opacity rounded-full mb-[10px]">
        <div class="flex justify-center items-center w-[68px] h-[70px] bg-primary rounded-full">
          <img src="../../assets/avatar.svg" alt="avatar" class="h-[35px]">
        </div>
      </div>
      <span class="text-lg leading-6 mb-[5px]">Badshah786</span>
      <div class="flex items-center mb-6 cursor-pointer" @click="handleClickChangePassword()">
        <span class="text-base leading-5 text-more-light-secondary mr-[5px]">Change Password</span>
        <img src="../../assets/blue-security.svg" alt="security" class="w-[15px]">
      </div>
      <div class="flex flex-col w-full text-sm leading-[18px]">
        <div class="flex items-center self-end mb-[5px]">
          <span class="text-most-light-secondary mr-[5px]">ID: 3795952255</span>
          <hr class="w-[1.5px] h-[13px] bg-white mr-[5px]">
          <img src="../../assets/clipboard.svg" alt="clipboard" class="h-[15px]" />
        </div>
        <div class="flex items-center w-full h-[35px] px-[15px] bg-primary-opacity rounded-[5px] mb-[10px]">
          <img src="../../assets/email.svg" alt="email" class="w-[15px] mr-[13px]">
          <input type="text" class="outline-none border-none bg-transparent flex-grow" placeholder="Enter E-mail ID" v-model="email">
        </div>
        <div class="flex items-center w-full h-[35px] px-[15px] bg-primary-opacity rounded-[5px] mb-[10px]">
          <img src="../../assets/phone-blue.svg" alt="phone" class="w-[15px] mr-[13px]">
          <input type="text" class="outline-none border-none bg-transparent flex-grow" placeholder="Enter Mobile Number"  v-model="phoneNumber">
        </div>
        <div class="flex items-center w-full h-[35px] px-[15px] bg-primary-opacity rounded-[5px]" v-if="status == 'submit'">
          <img src="../../assets/bank.svg" alt="bank" class="w-[15px] mr-[13px]">
          <span class="flex flex-grow">{{ viewCardNumber ? cardNumber : 'xxxxxxxxxxx' }}</span>
          <div class="flex items-center cursor-pointer ml-4" @click="handleClickViewCardNumber()">
            <span class="text-most-light-secondary mr-[5px]">Adhar card</span>
            <img src="../../assets/eye-blue.svg" alt="eye" class="w-[15px]">
          </div>
        </div>
        <div class="flex items-center w-full h-[35px] px-[15px] bg-primary-opacity rounded-[5px]" :class="{'mb-[10px]' : status == 'verify'}" v-if="status != 'submit'">
          <img src="../../assets/card.svg" alt="card" class="w-[15px] mr-[13px]">
          <input type="text" class="outline-none border-none bg-transparent flex-grow" placeholder="Enter Adhar Card No :"  v-model="cardNumber">
          <button class="h-[23px] px-[10px] border border-white rounded-sm ml-4" @click="handleClickVerify()" v-if="status == ''">Verify</button>
        </div>
        <div class="flex items-center w-full h-[35px] px-[15px] bg-primary-opacity rounded-[5px] mb-[13px]" v-if="status == 'verify'">
          <img src="../../assets/lock-blue.svg" alt="lock" class="h-[15px] mr-[15px]">
          <input type="text" class="outline-none border-none bg-transparent flex-grow" placeholder="Enter OTP:"  v-model="otp">
        </div>
        <button class="self-end w-[115px] h-[30px] border border-primary rounded-sm text-primary hover:bg-primary hover:text-white" v-if="status == 'verify'" @click="handleClickSubmit()">Submit</button>
      </div>
    </div>
    <div class="flex flex-grow flex-col text-lg leading-6">
      <div class="h-[134px] bg-primary-light-opacity rounded-[10px] mb-[10px]">
        <div class="flex h-[43px] justify-center items-center bg-primary-more-opacity rounded-[10px]">
          <span>Total : ₹ 10,646.63</span>
        </div>
        <div class="grid grid-cols-3 h-[91px] py-[10px]">
          <div class="flex flex-col justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <span class="mb-[5px]">Withdraw</span>
            <span class="text-danger">-₹2000.00</span>
          </div>
          <div class="flex flex-col justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <span class="mb-[5px]">Liability</span>
            <span>₹.00.00</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="mb-[5px]">Bonus</span>
            <span class="text-success">+₹6,646.63</span>
          </div>
        </div>
      </div>
      <div class="h-[135px] bg-primary-light-opacity rounded-[10px] mb-[10px]">
        <div class="grid grid-cols-3 h-[43px] px-5 items-center bg-primary-more-opacity rounded-[10px]">
          <span>Profit/Loss :</span>
          <span class="text-center">Total : ₹ 10,646.63</span>
          <span class="font-normal text-sm leading-[18px] text-right">(365 bets)</span>
        </div>
        <div class="grid grid-cols-3 h-[92px] py-[10px]">
          <div class="flex flex-col justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <div class="mb-[5px]">
              <span class="mr-[5px]">InPlay</span>
              <span class="text-sm leading-[18px] text-most-light-secondary">(110 bets)</span>
            </div>
            <div>
              <span class="text-success mr-[5px]">+₹6,646.63</span>
              <span class="font-normal text-success">Profit</span>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <div class="mb-[5px]">
              <span class="mr-[5px]">Sportbook</span>
              <span class="text-sm leading-[18px] text-most-light-secondary">(110 bets)</span>
            </div>
            <div>
              <span class="text-danger mr-[5px]">-₹2000.00</span>
              <span class="font-normal text-danger">Loss</span>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center">
            <div class="mb-[5px]">
              <span class="mr-[5px]">Live Casino</span>
              <span class="text-sm leading-[18px] text-most-light-secondary">(110 bets)</span>
            </div>
            <span>₹.00.00</span>
          </div>
        </div>
      </div>
      <div class="h-[101px] px-5 bg-primary-light-opacity rounded-[10px] mb-[10px]">
        <div class="grid grid-cols-3 py-[10px] border-b-[1.5px] border-white-lightest-opacity">
          <span>Deposit :</span>
          <span class="text-center">Total : ₹ 10,646.63</span>
          <span class="font-normal text-sm leading-[18px] text-most-light-secondary text-center">(365 Times)</span>
        </div>
        <div class="grid grid-cols-3 h-[58px] py-[10px] font-medium text-sm leading-[18px] text-most-light-secondary">
          <div class="flex justify-start items-center border-r-[1.5px] border-white-lightest-opacity">
            <span>Min : ₹100.00</span>
          </div>
          <div class="flex justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <span>Min : ₹1,00,000.00</span>
          </div>
          <div class="flex justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <span>Last Diposit : <span class="text-success">+₹5,000.00</span></span>
          </div>
        </div>
      </div>
      <div class="h-[101px] px-5 bg-primary-light-opacity rounded-[10px] mb-[10px]">
        <div class="grid grid-cols-3 py-[10px] border-b-[1.5px] border-white-lightest-opacity">
          <span>Withdraw :</span>
          <span class="text-center">Total : ₹ 10,646.63</span>
          <span class="font-normal text-sm leading-[18px] text-most-light-secondary text-center">(365 Times)</span>
        </div>
        <div class="grid grid-cols-3 h-[58px] py-[10px] font-medium text-sm leading-[18px] text-most-light-secondary">
          <div class="flex justify-start items-center border-r-[1.5px] border-white-lightest-opacity">
            <span>Min : ₹100.00</span>
          </div>
          <div class="flex justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <span>Min : ₹1,00,000.00</span>
          </div>
          <div class="flex justify-center items-center border-r-[1.5px] border-white-lightest-opacity">
            <span>Last Withdraw : <span class="text-danger">-₹5,000.00</span></span>
          </div>
        </div>
      </div>
      <SimpleAccordion title="Bank Details :" header-bg="primary-more-opacity" body-bg="primary-light-opacity" :body-maxheight="80">
        <div class="grid grid-cols-2 gap-5 text-base leading-5 mb-5">
          <div>
            <p class="mb-[10px]">Bank Name :</p>
            <input type="text" class="w-full h-10 bg-primary-opacity border-none outline-none rounded-[5px] px-5" placeholder="Enter Your Bank Name">
          </div>
          <div>
            <p class="mb-[10px]">Bank Account Number :</p>
            <input type="text" class="w-full h-10 bg-primary-opacity border-none outline-none rounded-[5px] px-5" placeholder="Enter Your Bank Account  Number">
          </div>
          <div>
            <p class="mb-[10px]">Bank IFSC Code :</p>
            <input type="text" class="w-full h-10 bg-primary-opacity border-none outline-none rounded-[5px] px-5" placeholder="Enter Your Bank IFSC Code">
          </div>
          <div>
            <p class="mb-[10px]">Account Holder Name :</p>
            <input type="text" class="w-full h-10 bg-primary-opacity border-none outline-none rounded-[5px] px-5" placeholder="Enter Your Account Holder Name">
          </div>
        </div>
        <div class="flex justify-end">
          <button class="w-40 h-10 border border-primary rounded-[5px] font-extrabold text-base leading-5 text-primary hover:bg-primary hover:text-white">SAVE</button>
        </div>
      </SimpleAccordion>
    </div>
    <PasswordChangeModal @close="handleClosePasswordChangeModal()" v-if="passwordChangeModal" />
  </div>
</template>

<script>
import PasswordChangeModal from '../../components/desktop/PasswordChangeModal.vue';
import SimpleAccordion from '../../components/desktop/SimpleAccordion.vue';

export default {
  name: "account-view",
  components: { SimpleAccordion, PasswordChangeModal },
  data() {
    return {
      email: '',
      phoneNumber: '',
      cardNumber: '',
      otp: '',
      status: '',
      passwordChangeModal: false,
      viewCardNumber: false,
    }
  },
  methods: {
    handleClickVerify() {
      this.status = 'verify';
      this.email = 'star111support@gmail.com';
      this.phoneNumber = '+91 1234567890';
    },
    handleClickSubmit() {
      this.status = 'submit';
    },
    handleClickChangePassword() {
      this.passwordChangeModal = true;
    },
    handleClickViewCardNumber() {
      this.viewCardNumber = true;
    },
    handleClosePasswordChangeModal() {
      this.passwordChangeModal = false;
    }
  }
}
</script>