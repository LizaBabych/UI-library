<template>
  <div>
    <MyModal>
      <template #trigger>
        <button>Open modal</button>
      </template>
      <template #head>
        HEADER
      </template>
      <template #body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </template>
      <template #footer>
        <button>Okey</button>
      </template>
    </MyModal>
  </div>
</template>

<script lang="ts">
  import MyModal from '@/components/MyModal.vue';
  export default {
    name: 'Home',
    components: {
      MyModal,
    },
  };
</script>
