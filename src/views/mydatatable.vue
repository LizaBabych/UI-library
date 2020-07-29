<template>
  <div id="app">
    <h1>Data-table</h1>
    <div class="container">
      <h3>The MyDataTable component is used to display tabular data.</h3>
    </div>
    <p class="parag">MyDataTable supports sorting and searching data.</p>
    <div class="example">
      <MyDataTable
        :config="config"
        :users="users"
      >
      </MyDataTable>
    </div>
    <div class="code">
      <pre><<span class="tag">MyDataTable </span>
    :<span class="attr">config</span>=<span class="attr-string"> "config"</span>
    :<span class="attr">users</span>=<span class="attr-string">"users"</span>
>
<<span class="tag">/MyDataTable</span>></pre>
    </div>
    <div class="container">
      <h3>Configuration</h3>
    </div>
    <p class="parag">To display the table, set 'config' and 'users' parameters.</p>
    <p class="parag">In the config, set the fields that will be displayed in the header.</p>
    <p class="parag">In the config, specify the 'title' and 'value'. For example: tittle: 'Name', value: 'John'.</p>
    <p class="parag">If the value in the type field is number, then the content will be centered on the right side.</p>
    <p class="parag">In users, specify the value from the config and the value that will be displayed in the column.</p>
    <p class="parag">The _index field increments the value starting from 1. Thus, you can number the fields.</p>
    <div class="code">
    <pre>data() {
  <span class="param">return</span> {
    config: [
      {tittle: <span class="attr-string">'№'</span>, value: <span class="attr-string">'_index'</span>},
      {tittle: <span class="attr-string">'Имя'</span>, value: <span class="attr-string">'name'</span>},
      {tittle: <span class="attr-string">'Фамилия'</span>, value: <span class="attr-string">'surname'</span>},
      {tittle: <span class="attr-string">'Возраст'</span>, value: <span class="attr-string">'age'</span>, type: <span class="attr-string">'number'</span>},
    ],
    users: [
      {id: <span class="attr">1</span>, name: <span class="attr-string">'Вася'</span>, surname: <span class="attr-string">'Петров'</span>, age: <span class="attr-string">12</span>,},
      {id: <span class="attr">2</span>, name: <span class="attr-string">'Вася'</span>, surname: <span class="attr-string">'Васечкин'</span>, age: <span class="attr-string">15</span>,},
      {id: <span class="attr">3</span>, name: <span class="attr-string">'Вася'</span>, surname: <span class="attr-string">'Абрамов'</span>, age: <span class="attr-string">13</span>,},
      {id: <span class="attr">4</span>, name: <span class="attr-string">'Вася'</span>, surname: <span class="attr-string">'Бровкин'</span>, age: <span class="attr-string">18</span>,},
      {id: <span class="attr">5</span>, name: <span class="attr-string">'Вася'</span>, surname: <span class="attr-string">'Каролович'</span>, age: <span class="attr-string">11</span>,},
    ],
  },
},</pre>
    </div>
    <div class="container">
      <h3>Sorting</h3>
    </div>
    <p class="parag">Set the parameter 'sorting' and the value 'true'</p>
    <p class="parag">The default is 'false'</p>
    <div class="example">
      <MyDataTable
        :config="config1"
        :users="users1"
      >
      </MyDataTable>
    </div>
    <div class="code">
      <pre><<span class="tag">MyDataTable </span>
    :<span class="attr">config1</span>=<span class="attr-string">"config1"</span>
    :<span class="attr">users1</span>=<span class="attr-string">"users1"</span>
>
<<span class="tag">/MyDataTable</span>>

data() {
  <span class="param">return</span> {
    config: [
      {tittle: <span class="attr-string">'№'</span>, value: <span class="attr-string">'_index'</span>},
      {tittle: <span class="attr-string">'Имя'</span>, value: <span class="attr-string">'name'</span>},
      {tittle: <span class="attr-string">'Фамилия'</span>, value: <span class="attr-string">'surname'</span>, sortable: <span class="attr">true</span>},
      {tittle: <span class="attr-string">'Возраст'</span>, value: <span class="attr-string">'age'</span>, type: <span class="attr-string">'number'</span>, sortable: <span class="attr">true</span>},
    ],
  },
},</pre>
    </div>
    <div class="container">
      <h3>Search</h3>
    </div>
    <p class="parag">The table has a search. It takes arrays 'fields' and 'filters'</p>
    <p class="parag">Arrays 'fields' and 'filters'</p>
    <p class="parag">The array 'fields' accepts fields by which the table will be searched</p>
    <p class="parag">The array 'filters' accepts functions that will filter the input.</p>
    <div class="example">
      <MyDataTable
        :config="config"
        :users="users"
        :search="search"
      >
      </MyDataTable>
    </div>
    <div class="code">
      <pre><<span class="tag">MyDataTable </span>
    :<span class="attr">config</span>=<span class="attr-string">"config"</span>
    :<span class="attr">users</span>=<span class="attr-string">"users"</span>
    :<span class="attr">search</span>=<span class="attr-string">"search"</span>
>
<<span class="tag">/MyDataTable</span>></pre>
    </div>
    <div class="container">
      <h3>Search data</h3>
    </div>
    <div class="code">
    <pre>data() {
  <span class="param">return</span> {
    search: {
      fields: [<span class="attr-string">'name'</span>, <span class="attr-string">'surname'</span>],
      filters: [
        (v)<span class="param"> => </span><span style="color: red">v</span>.<span style="color: Blue">toLowerCase</span>(),
      ],
    },
  },
},</pre>
    </div>
    <div class="container">
      <h3>Properties</h3>
    </div>
    <div class="example">
      <MyDataTable
        :config="configProp"
        :users="usersProp"
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
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age', type: 'number'},
      ],
      users: [
        {id: 1, name: 'Вася', surname: 'Петров', age: 12},
        {id: 2, name: 'Вася', surname: 'Васечкин', age: 15},
        {id: 3, name: 'Вася', surname: 'Абрамов', age: 13},
        {id: 4, name: 'Вася', surname: 'Бровкин', age: 18},
        {id: 5, name: 'Вася', surname: 'Каролович', age: 11},
      ],
      search: {
        fields: ['name', 'surname'],
        filters: [
          (v: any) => v.toLowerCase(),
        ],
      },
      config1: [
        {title: '№', value: '_index'},
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname', sortable: true},
        {title: 'Возраст', value: 'age', type: 'number', sortable: true},
      ],
      users1: [
        {id: 1, name: 'Вася', surname: 'Петров', age: 12},
        {id: 2, name: 'Вася', surname: 'Васечкин', age: 15},
        {id: 3, name: 'Вася', surname: 'Абрамов', age: 13},
        {id: 4, name: 'Вася', surname: 'Бровкин', age: 18},
        {id: 5, name: 'Вася', surname: 'Каролович', age: 11},
      ],
      configProp: [
        {title: '№', value: '_index'},
        {title: 'Prop', value: 'prop'},
        {title: 'Type', value: 'type'},
        {title: 'Default', value: 'default'},
        {title: 'Required', value: 'required'},
        {title: 'Description', value: 'description'},
      ],
      usersProp: [
        {id: 1, prop: 'config', type: 'Array', default: '-', required: 'Yes', description: 'Specify the table configuration. It will be displayed in the header.'},
        {id: 2, prop: 'users', type: 'Array', default: '-', required: 'Yes', description: 'Specify a table field. The values from the configuration and the value that is displayed in the table.'},
        {id: 3, prop: 'search', type: 'Object', default: 'null', required: 'No', description: 'Specify search fields. Functions that will sort data and values from the configuration that will be searched.'},
      ],
    };
  },
});
</script>

<style lang="less">
</style>
