<template>
  <div>
    <MyModal v-slot:trigger>
      <button>Open modal</button>
    </MyModal>
  </div>
</template>

<script lang="ts">
  import MyModal from '@/components/MyModal.vue';
  export default {
    name: 'ModalView',
    components: {
      MyModal,
    },
  };
</script>
