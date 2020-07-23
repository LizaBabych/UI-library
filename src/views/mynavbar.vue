<template>
  <div id="app">
    <MyNavbar>
      <template #logo>
        <img class="header-logo" src="@/favicon.png" alt="Error">
      </template>
      <template #menu>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/mybutton">MyButton</router-link></li>
        <li><router-link to="/mygrid">MyGrid</router-link></li>
        <li><router-link to="/mynavbar">MyNavbar</router-link></li>
        <li><router-link to="/mymodal">MyModal</router-link></li>
        <li><router-link to="/mycarousel">MyCarousel</router-link></li>
        <li><router-link to="/mydatatable">MyDataTable</router-link></li>
      </template>
    </MyNavbar>
  </div>
</template>

<script lang="ts">
import MyNavbar from '@/components/MyNavbar.vue';

export default({
  name: 'mynavbar',
  components: {
    MyNavbar,
  },
});
</script>

<style lang="less">
</style>
