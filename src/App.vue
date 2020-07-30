<template>
  <div id="app">
    <MyNavbar class="nav">
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
    <router-view/>
  </div>
</template>

<script lang="ts">
import MyNavbar from '@/components/MyNavbar.vue';
export default({
  name: 'App',
  components: {
    MyNavbar,
  },
});
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h3 {
    font-weight: normal;
    font-size: 22px;
  }
  .parag {
    margin: 0;
    text-align: center;
    background-color: #fffef7;
    padding: 10px;
  }
  .container {
    display: flex;
    justify-content: center;
    background-color: #fcfaeb;
    padding: 10px;
    margin-top: 15px;
  }
  .example {
    display: flex;
    justify-content: center;
    align-items: baseline;
    border: 1px solid rgba(0,0,0,.125);
    padding: 15px;
  }
  p { text-align: center; }
  .param { color: Violet; }
  .tag { color: #e45649; }
  .attr { color: #986801; }
  .attr-string { color: #50a14f; }
  .code {
    display: flex;
    justify-content: center;
    background-color: #f9f9f9;
    font-size: 18px;
    color: #383a42;
    box-shadow: 0 1px 1px rgba(0,0,0,.125);
  }
  @media screen and (min-width: 992px) {
    #app {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 900px;
      margin: 0 10%;
    }
  }
  @media screen and (max-width: 991px) {
    #app {
      width: 600px;
    }
    .code {
      font-size: 18px;
      overflow-x: scroll;
      justify-content: flex-start;
    }
    .example {
      overflow-x: scroll;
      margin: 0;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 767px) {
    #app {
      width: 100%;
    }
    h1 { font-size: 22px; }
    .parag {
      font-size: 20px;
      text-align: left;
    }
    .param { font-size: 15px; }
    .code {
      font-size: 18px;
      overflow-x: scroll;
      padding: 0 15px;
    }
    .example {
      overflow-x: scroll;
      margin: 0;
      flex-wrap: wrap;
    }
  }

</style>
