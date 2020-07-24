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
    <h1>Modal</h1>
    <MyModal>
      <template #trigger>
        <button>Open modal</button>
      </template>
      <template #head>
        HEADER
      </template>
      <template #body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </template>
      <template #footer>
        <button>Okey</button>
      </template>
    </MyModal>

    <h1>Button</h1>
    <MyButton> Default </MyButton>
    <MyButton color="success"> Success </MyButton>
    <MyButton color="danger"> Danger </MyButton>
    <MyButton color="warning"> Warning </MyButton>
    <MyButton color="info"> Info </MyButton>
    <MyButton color="light"> Light </MyButton>
    <MyButton color="dark"> Dark </MyButton>
    <MyButton color="primary"> Primary </MyButton>
    <MyButton color="secondary"> Secondary </MyButton></br>
    <MyButton size="lg"> Default </MyButton>
    <MyButton color="success" size="lg"> Success </MyButton>
    <MyButton color="danger" size="lg"> Danger </MyButton>
    <MyButton color="warning" size="lg"> Warning </MyButton>
    <MyButton color="info" size="lg"> Info </MyButton>
    <MyButton color="light" size="lg"> Light </MyButton>
    <MyButton color="dark" size="lg"> Dark </MyButton>
    <MyButton color="primary" size="lg"> Primary </MyButton>
    <MyButton color="secondary" size="lg"> Secondary </MyButton></br>
    <MyButton size="sm"> Default </MyButton>
    <MyButton color="success" size="sm"> Success </MyButton>
    <MyButton color="danger" size="sm"> Danger </MyButton>
    <MyButton color="warning" size="sm"> Warning </MyButton>
    <MyButton color="info" size="sm"> Info </MyButton>
    <MyButton color="light" size="sm"> Light </MyButton>
    <MyButton color="dark" size="sm"> Dark </MyButton>
    <MyButton color="primary" size="sm"> Primary </MyButton>
    <MyButton color="secondary" size="sm"> Secondary </MyButton>

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

    <h1>Carousel</h1>
    <MyCarousel :pictures="pictures">
    </MyCarousel>

    <h1>Data-table</h1>
    <MyDataTable
      :config="config"
      :users="users"
      :search="search"
    >
    </MyDataTable>
  </div>
</template>

<script lang="ts">
import MyNavbar from '@/components/MyNavbar.vue';
import MyButton from '@/components/MyButton.vue';
import Row from '@/components/grid/Row.vue';
import Column from '@/components/grid/Column.vue';
import MyModal from '@/components/MyModal.vue';
import MyCarousel from '@/components/MyCarousel.vue';
import MyDataTable from '@/components/MyDataTable.vue';
export default({
  name: 'Home',
  components: {
    MyNavbar,
    MyButton,
    Row,
    Column,
    MyModal,
    MyCarousel,
    MyDataTable,
  },
  data () {
    return {
      cols: '12',
      pictures: [
      'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all'
     ],
      config: [
        {title: '№', value: '_index'},
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname', sortable: true},
        {title: 'Возраст', value: 'age', type: 'number', sortable: true},
      ],
      users: [
        {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
        {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
        {id: 30050, name: 'Вася', surname: 'Абрамов', age: 13},
        {id: 30051, name: 'Вася', surname: 'Бровкин', age: 18},
        {id: 30050, name: 'Вася', surname: 'Каролович', age: 11},
        {id: 30051, name: 'Вася', surname: 'Мишкин', age: 10},
        {id: 30050, name: 'Вася', surname: 'Цветочек', age: 19},
        {id: 30051, name: 'Вася', surname: 'Иванов', age: 25},
      ],
      search: {
        fields: ['name', 'surname'],
        filters: [
          (v) => v.toLowerCase(),
        ],
      },
    };
  },
});
</script>

<style lang="less">
  body {
    margin-top: 100px;
    margin-left: 0;
    margin-right: 0;
  }
  h1 {
    padding: 30px 0 30px 30px;
    background-color: LightBlue;
    margin: 20px 0;
  }
</style>
