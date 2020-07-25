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
    <h1>Carousel</h1>
    <MyCarousel :pictures="pictures">
    </MyCarousel>
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
  data() {
    return {
      pictures: [
      'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all',
     ],
    };
  },
});
</script>

<style lang="less">
</style>
