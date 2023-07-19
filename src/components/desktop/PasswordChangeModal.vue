<template>
  <Modal title="Change Password" titleColor="white" :width="462" :height="424" :top="135">
    <div class="font-semibold text-base leading-5 text-white" id="modal">
      <div class="mb-[10px]">
        <p class="mb-[6px]">Enter Current Password</p>
        <input type="password" class="w-full h-12 px-4 outline-none border-none bg-white-lightest-opacity rounded-[10px]">
      </div>
      <div class="mb-[10px]">
        <p class="mb-[6px]">Enter New Passowrd</p>
        <input type="password" class="w-full h-12 px-4 outline-none border-none bg-white-lightest-opacity rounded-[10px]">
      </div>
      <div class="mb-[30px]">
        <p class="mb-[6px]">Confirm New Password</p>
        <input type="password" class="w-full h-12 px-4 outline-none border-none bg-white-lightest-opacity rounded-[10px]">
      </div>
      <div class="flex justify-center">
        <button class="w-[244px] h-12 bg-primary rounded-[10px] font-bold" @click="$emit('close')">Change Password</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: "password-change-modal-component",
  components: { Modal }
}
</script>