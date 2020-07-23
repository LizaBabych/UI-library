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
    <div id="button">
      <h1>Button</h1>
      <MyButton> Default </MyButton>
      <MyButton color="success"> Success </MyButton>
      <MyButton color="danger"> Danger </MyButton>
      <MyButton color="warning"> Warning </MyButton>
      <MyButton color="info"> Info </MyButton>
      <MyButton color="light"> Light </MyButton>
      <MyButton color="dark"> Dark </MyButton>
      <MyButton color="primary"> Primary </MyButton>
      <MyButton color="secondary"> Secondary </MyButton></br>
      <MyButton size="lg"> Default </MyButton>
      <MyButton color="success" size="lg"> Success </MyButton>
      <MyButton color="danger" size="lg"> Danger </MyButton>
      <MyButton color="warning" size="lg"> Warning </MyButton>
      <MyButton color="info" size="lg"> Info </MyButton>
      <MyButton color="light" size="lg"> Light </MyButton>
      <MyButton color="dark" size="lg"> Dark </MyButton>
      <MyButton color="primary" size="lg"> Primary </MyButton>
      <MyButton color="secondary" size="lg"> Secondary </MyButton></br>
      <MyButton size="sm"> Default </MyButton>
      <MyButton color="success" size="sm"> Success </MyButton>
      <MyButton color="danger" size="sm"> Danger </MyButton>
      <MyButton color="warning" size="sm"> Warning </MyButton>
      <MyButton color="info" size="sm"> Info </MyButton>
      <MyButton color="light" size="sm"> Light </MyButton>
      <MyButton color="dark" size="sm"> Dark </MyButton>
      <MyButton color="primary" size="sm"> Primary </MyButton>
      <MyButton color="secondary" size="sm"> Secondary </MyButton>
    </div>
  </div>
</template>

<script lang="ts">
import MyButton from '@/components/MyButton.vue';
import MyNavbar from '@/components/MyNavbar.vue';

export default({
  name: 'mybutton',
  components: {
    MyButton,
    MyNavbar,
  },
});
</script>

<style lang="less">
</style>
