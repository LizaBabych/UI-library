<template>
  <div id="app">
    <div class="home-page">
      <h2 class="title-component section-title">UI-library</h2>
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
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
