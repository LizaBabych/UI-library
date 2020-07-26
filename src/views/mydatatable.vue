<template>
  <div id="app">
    <MyNavbar>
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
    <h1>Data-table</h1>
    <div class="container">
        <p>Use the component table for actions in forms, dialogs, and more. </p>
    </div>
    <div class="example">
      <MyDataTable
        :config="config"
        :users="users"
      >
      </MyDataTable>
    </div>
    <div class="container">
        <p>Table has sorting. We need use param sortable</p>
    </div>
    <div class="example">
      <MyDataTable
        :config="config"
        :users="users"
      >
      </MyDataTable>
    </div>
    <div class="container">
        <p>Table has search</p>
    </div>
    <div class="example">
      <MyDataTable
        :config="config"
        :users="users"
        :search="search"
      >
      </MyDataTable>
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
        {id: 30052, name: 'Вася', surname: 'Абрамов', age: 13},
        {id: 30053, name: 'Вася', surname: 'Бровкин', age: 18},
        {id: 30054, name: 'Вася', surname: 'Каролович', age: 11},
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
