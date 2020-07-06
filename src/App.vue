<template>
  <div id="app">
    <!-- <router-view/> -->
    <MyButton class="button button-danger"></MyButton>
    <MyButton class="button button-warning"></MyButton>
    <MyButton class="button button-success"></MyButton>
    <MyButton class="button button-info"></MyButton>
    <MyButton class="button button-primary"></MyButton>
    <MyButton class="button button-secondary"></MyButton>
    <MyButton class="button button-light"></MyButton>
    <MyButton class="button button-dark"></MyButton></br>

    <MyButton class="button button-lg button-danger"></MyButton>
    <MyButton class="button button-lg button-warning"></MyButton>
    <MyButton class="button button-lg button-success"></MyButton>
    <MyButton class="button button-lg button-info"></MyButton>
    <MyButton class="button button-lg button-primary"></MyButton>
    <MyButton class="button button-lg button-secondary"></MyButton>
    <MyButton class="button button-lg button-light"></MyButton>
    <MyButton class="button button-lg button-dark"></MyButton></br>

    <MyButton class="button button-sm button-danger"></MyButton>
    <MyButton class="button button-sm button-warning"></MyButton>
    <MyButton class="button button-sm button-success"></MyButton>
    <MyButton class="button button-sm button-info"></MyButton>
    <MyButton class="button button-sm button-primary"></MyButton>
    <MyButton class="button button-sm button-secondary"></MyButton>
    <MyButton class="button button-sm button-light"></MyButton>
    <MyButton class="button button-sm button-dark"></MyButton></br>

    <MyButton class="button button-danger disabled"></MyButton>
    <MyButton class="button button-warning disabled"></MyButton>
    <MyButton class="button button-success disabled"></MyButton>
    <MyButton class="button button-info disabled"></MyButton>
    <MyButton class="button button-primary disabled"></MyButton>
    <MyButton class="button button-secondary disabled"></MyButton>
    <MyButton class="button button-light disabled"></MyButton>
    <MyButton class="button button-dark disabled"></MyButton></br>
  </div>
</template>

<script lang="ts">
import MyButton from '@/components/MyButton.vue';

export default({
  components: {
    MyButton,
  },
});
</script>

<style lang="less">

</style>
