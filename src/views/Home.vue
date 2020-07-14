<template>
  <div class="data-table-view">
    <MyDataTable
      :columns="columns"
      :items="items"
      :sort-button-style="sortButtonStyle"
      :search="search"
    />
  </div>
</template>

<script>
  import Vue from 'vue';
  import MyDataTable from '@/components/MyDataTable.vue';
  const defaultSort = 'fas fa-sort';
  export default Vue.extend({
    name: 'Home',
    components: {
      MyDataTable,
    },
    data() {
      return {
        columns: [
          {title: '№', value: '_index'},
          {title: 'Имя', value: 'name'},
          {title: 'Фамилия', value: 'surname', sortable: true, currentSortIcon: defaultSort},
          {title: 'Возраст', value: 'age', type: 'number', sortable: true, currentSortIcon: defaultSort},
        ],
        items: [
          {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
          {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
          {id: 30050, name: 'Вася', surname: 'Абрамов', age: 13},
          {id: 30051, name: 'Вася', surname: 'Бровкин', age: 18},
          {id: 30050, name: 'Вася', surname: 'Каролович', age: 11},
          {id: 30051, name: 'Вася', surname: 'Мишкин', age: 10},
          {id: 30050, name: 'Вася', surname: 'Цветочек', age: 19},
          {id: 30051, name: 'Вася', surname: 'Иванов', age: 25},
        ],
        sortButtonStyle: {
          default: defaultSort,
          ascending: 'fas fa-sort-up',
          descending: 'fas fa-sort-down',
        },
        search: {
          fields: ['name', 'surname'],
          filters: [
            v => v.toLowerCase()
          ]
        },
      };
    },
  });
</script>
