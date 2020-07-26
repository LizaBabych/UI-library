<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/mybutton">MyButton</router-link> |
      <router-link to="/mygrid">MyGrid</router-link> |
      <router-link to="/mymodal">MyModal</router-link> |
      <router-link to="/mycarousel">MyCarousel</router-link> |
      <router-link to="/mydatatable">MyDataTable</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #nav {
    padding: 10px;
    text-align: center;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: rgb(77, 0, 174);
      }
    }
  }
</style>
