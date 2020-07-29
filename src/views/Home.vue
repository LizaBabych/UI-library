<template>
  <div id="app">
    <div class="home-width">
      <img src="@/library.jpg" alt="Error"></img></br>
    </div>
    <h2 class="title">UI-library</h2>
  </div>
</template>

<script lang="ts">
export default({
  name: 'Home',
});
</script>

<style lang="less">
  body {
    margin-top: 100px;
    margin-left: 0;
    margin-right: 0;
  }
  .burger-link {
    font-size: 20px;
    color: rgb(77, 0, 174);
    font-weight: bold;
  }
  .logo-link {
    color: blue;
    font-size: 30px;
    text-shadow: 2px 2px black;
  }
  h1 {
    padding: 30px 0;
    text-align: center;
    background-color: LightBlue;
    margin: 20px 0;
  }
  .cont {
    display: flex;
    justify-content: center;
  }
  .home-width {
    display: flex;
    justify-content: center;
    & img {
      width: 300px;
      height: 300px;
    }
  }
  .title { text-align: center; }
</style>
