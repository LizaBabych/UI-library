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
