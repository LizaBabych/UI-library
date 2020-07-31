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
h2.funny-title{
  border-top: 5px solid #E0DBDE;
  border-bottom: 5px solid #E0DBDE;
  font-size: 70px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-family: 'Russo One',sans-serif;
  font-weight: 900px;
  letter-spacing: 8px;
}
@-webkit-keyframes move-background {
0%{background-position:-300px 0}
100%{background-position:300px -300px}
}
@-moz-keyframes move-background {
0%{background-position:-300px 0}
100%{background-position:300px -300px}
}
@keyframes move-background {
0%{background-position:-300px 0}
100%{background-position:300px -300px}
}
.section-title {
  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
  animation-play-state: running;
  color: transparent;
  background: url(https://obninsksite.ru/assets/theme/images/blog/square.svg) no-repeat #ECE7EA;
  background-size: cover;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation: move-background 20s infinite linear alternate;
  -moz-animation: move-background 20s infinite linear alternate;
  animation: move-background 20s infinite linear alternate;
}
body {
  margin-top: 100px;
  margin-left: 0;
  margin-right: 0;
}
.burger-link {
  text-decoration: none;
  font-size: 20px;
  color: #ebebeb;
  font-weight: bold;
}
.logo-link {
  text-decoration: none;
  color: white;
  font-size: 30px;
  text-shadow: 2px 2px black;
}
.cont {
  display: flex;
  justify-content: center;
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
    width: 900px;
    margin-left: calc((100% - 900px) / 2);
  }
}
@media screen and (max-width: 991px) {
  #app {
    width: 600px;
    margin-left: calc((100% - 600px) / 2);
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
    margin: 0;
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
    padding: 0 15px;
    flex-wrap: wrap;
  }
}
</style>
