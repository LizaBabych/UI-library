<template>
  <div id="app">
    <MyNavbar>
      <template #logo>
        <router-link to="/home" style="color: blue; font-size: 30px; text-shadow: 2px 2px black;">HOME</router-link></li>
      </template>
      <template #menu>
        <li><router-link to="/mybutton">MyButton</router-link></li>
        <li><router-link to="/mygrid">MyGrid</router-link></li>
        <li><router-link to="/mymodal">MyModal</router-link></li>
        <li><router-link to="/mycarousel">MyCarousel</router-link></li>
        <li><router-link to="/mydatatable">MyDataTable</router-link></li>
      </template>
    </MyNavbar>
      <h1>Modal</h1>
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
import MyNavbar from '@/components/MyNavbar.vue';

export default({
  name: 'mymodal',
  components: {
    MyModal,
    MyNavbar,
  },
});
</script>

<style lang="less">
</style>
