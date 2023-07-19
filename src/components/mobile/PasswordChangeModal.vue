<template>
  <Modal title="Change Password" titleColor="white" :width="300" :height="400" :top="120">
    <div class="font-semibold text-sm text-white" id="modal">
      <div class="mb-[10px]">
        <p class="mb-[6px]">Enter Current Password</p>
        <input type="password" class="w-full h-10 px-4 outline-none border-none bg-white-lightest-opacity rounded-[5px]">
      </div>
      <div class="mb-[10px]">
        <p class="mb-[6px]">Enter New Passowrd</p>
        <input type="password" class="w-full h-10 px-4 outline-none border-none bg-white-lightest-opacity rounded-[5px]">
      </div>
      <div class="mb-5">
        <p class="mb-[6px]">Confirm New Password</p>
        <input type="password" class="w-full h-10 px-4 outline-none border-none bg-white-lightest-opacity rounded-[5px]">
      </div>
      <div class="flex justify-center">
        <button class="w-full h-10 bg-primary rounded-[5px] font-bold" @click="$emit('close')">Change Password</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: "mobile-password-change-modal-component",
  components: { Modal }
}
</script>