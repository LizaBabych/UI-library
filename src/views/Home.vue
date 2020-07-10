<template>
  <div id="app">
    <Modal>Open modal</Modal>
  </div>
</template>

<script lang="ts">
import MyButton from '@/components/MyModal.vue';

export default({
  name: 'Home',
  components: {
    MyModal,
  },
});

</script>
