<template>
  <div id="app">
    <div id="button">
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
    </div>
    <div id="grid">
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
    <div id="modal">
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
    </div>
    <div id="datatable">
      <MyDataTable
        :config="config"
        :users="users"
        :search="search"
      />
    </div>
  </div>
</template>

<script lang="js">

import MyButton from '@/components/MyButton.vue';
import Row from '@/components/grid/Row.vue';
import Column from '@/components/grid/Column.vue';
import MyModal from '@/components/MyModal.vue';
import MyCarousel from '@/components/MyCarousel.vue';
import MyDataTable from '@/components/MyDataTable.vue';

export default({
  name: 'Home',
  components: {
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
