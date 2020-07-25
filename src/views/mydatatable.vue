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
    <div id="datatable">
      <h1>Data-table</h1>
      <MyDataTable
        :config="config"
        :users="users"
        :search="search"
      />
    </div>
  </div>
</template>

<script lang="ts">
import MyDataTable from '@/components/MyDataTable.vue';
import MyNavbar from '@/components/MyNavbar.vue';

export default({
  name: 'mydatatable',
  components: {
    MyDataTable,
    MyNavbar,
  },
  data() {
    return {
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
</style>
