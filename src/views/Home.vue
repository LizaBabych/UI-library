<template>
  <div id="app">
    <div class="home-page">
      <h2 class="funny-title section-title">UI-library</h2>
      <img src="@/assets/book.gif" alt="">
    </div>
  </div>
</template>

<script lang="ts">
export default({
  name: 'Home',
});
</script>

<style lang="less">
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
  font-size: 20px;
  color: #ebebeb;
  font-weight: bold;
}
.logo-link {
  color: f5efd0;
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
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
