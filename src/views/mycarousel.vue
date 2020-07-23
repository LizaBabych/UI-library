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
    <div id="carousel">
      <h1>Carousel</h1>
      <MyCarousel :pictures="pictures">
      </MyCarousel>
    </div>
  </div>
</template>

<script lang="ts">
import MyCarousel from '@/components/MyCarousel.vue';
import MyNavbar from '@/components/MyNavbar.vue';

export default({
  name: 'mycarousel',
  components: {
    MyCarousel,
    MyNavbar,
  },
  data () {
    return {
      pictures: [
      'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all'
     ],
    };
  },
});
</script>

<style lang="less">
</style>
