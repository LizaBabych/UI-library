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

    <div id="grid">
      <h1>Grid</h1>
      <Row>
        <Column>1</Column>
      </Row>
      <Row>
        <Column>2</Column>
        <Column>2</Column>
      </Row>
      <Row>
        <Column>3</Column>
        <Column>3</Column>
        <Column>3</Column>
      </Row>
      <Row>
        <Column>4</Column>
        <Column>4</Column>
        <Column>4</Column>
        <Column>4</Column>
      </Row>
      <Row>
        <Column>6</Column>
        <Column>6</Column>
        <Column>6</Column>
        <Column>6</Column>
        <Column>6</Column>
        <Column>6</Column>
      </Row>
      <Row>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
        <Column>12</Column>
      </Row>
    </div>

  </div>
</template>

<script lang="ts">
import MyNavbar from '@/components/MyNavbar.vue';
import Row from '@/components/grid/Row.vue';
import Column from '@/components/grid/Column.vue';

export default({
  name: 'mygrid',
  components: {
    MyNavbar,
    Row,
    Column,
  },
  data () {
    return {
      cols: '12',
    };
  },
});
</script>

<style lang="less">
</style>
