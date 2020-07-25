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
    <h1>Button</h1>

    <div class="container">
        <p>Use the component button for actions in forms, dialogs, and more. </p>
    </div>
    <div class="example">
      <MyButton color="success"> Success </MyButton>
      <MyButton color="danger"> Danger </MyButton>
      <MyButton color="warning"> Warning </MyButton>
    </div>
    <div class="container">
      <p>Default button</p>
    </div>
    <div class="example">
      <MyButton> Default </MyButton></br>
    </div>
    <div class="container">
      <p>Colors</p>
    </div>
    <div class="param">
      <p>#success #danger #warning #light #dark #primary #secondary</p>
    </div>
    <div class="example">
      <MyButton color="success"> Success </MyButton>
      <MyButton color="danger"> Danger </MyButton>
      <MyButton color="warning"> Warning </MyButton>
      <MyButton color="light"> Light </MyButton>
      <MyButton color="dark"> Dark </MyButton>
      <MyButton color="primary"> Primary </MyButton>
      <MyButton color="secondary"> Secondary </MyButton></br>
    </div>
    <div class="container">
      <p>Sizes</p>
    </div>
    <div class="param">
      <p>#lg #sm</p>
    </div>
    <div class="example">
      <MyButton size="lg"> Big </MyButton>
      <MyButton> Medium </MyButton>
      <MyButton size="sm"> Small </MyButton>
    </div>
    <div class="container">
      <p>The button takes such parameters</p>
    </div>
    <div class="example">
      <MyDataTable
        :config="config"
        :users="users"
      >
      </MyDataTable>
    </div>
</div>
</template>

<script lang="ts">
import MyButton from '@/components/MyButton.vue';
import MyNavbar from '@/components/MyNavbar.vue';
import MyDataTable from '@/components/MyDataTable.vue';

export default({
  name: 'mybutton',
  components: {
    MyButton,
    MyNavbar,
    MyDataTable,
  },
  data() {
    return {
      config: [
        {title: '№', value: '_index'},
        {title: 'Prop', value: 'prop'},
        {title: 'Type', value: 'type'},
        {title: 'Default', value: 'default'},
        {title: 'Required', value: 'required'},
      ],
      users: [
        {id: 30050, prop: 'Color', type: 'String', default: 'medium', required: 'No'},
        {id: 30051, prop: 'Size', type: 'String', default: 'primary', required: 'No'},
      ],
    };
  },
});
</script>

<style lang="less">
  .container {
    display: flex;
    justify-content: center;
    background-color: wheat;
    padding: 10px;
    font-size: 22px;
    margin: 15px 0;
  }
  .example {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  .param {
    display: flex;
    justify-content: center;
    & p {
      color: Violet;
    }
  }
</style>
