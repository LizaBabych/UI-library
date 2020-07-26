<template>
  <div id="app">
    <MyNavbar>
      <template #logo>
        <router-link class='logo-link' to="/home">HOME</router-link></li>
      </template>
      <template #menu>
        <li><router-link class="burger-link" to="/mybutton">MyButton</router-link></li>
        <li><router-link class="burger-link" to="/mygrid">MyGrid</router-link></li>
        <li><router-link class="burger-link" to="/mymodal">MyModal</router-link></li>
        <li><router-link class="burger-link" to="/mycarousel">MyCarousel</router-link></li>
        <li><router-link class="burger-link" to="/mydatatable">MyDataTable</router-link></li>
      </template>
    </MyNavbar>
      <h1>Modal</h1>
      <div class="container">
          <p>Use the component button for actions in forms, dialogs, and more. </p>
      </div>
      <div class="example">
      <MyModal>
        <template #trigger>
          <MyButton>Open modal</MyButton>
        </template>
        <template #head>
          HEADER
        </template>
        <template #body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
        <template #footer>
          <MyButton color='success' size='sm'>Okey</MyButton>
        </template>
      </MyModal>
      </div>

  </div>
</template>

<script lang="ts">
import MyButton from '@/components/MyButton.vue';
import MyModal from '@/components/MyModal.vue';
import MyNavbar from '@/components/MyNavbar.vue';

export default({
  name: 'mymodal',
  components: {
    MyModal,
    MyNavbar,
    MyButton,
  },
});
</script>

<style lang="less">
</style>
