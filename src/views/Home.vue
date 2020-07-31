<template>
  <div id="app">
    <div class="home-page">
      <h2 class="funny-title section-title">UI-library</h2>
      <img src="@/assets/book.gif" alt="">
    </div>
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD

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
  data() {
    return {
      cols: '12',
      pictures: [
      'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all',
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
=======
export default({
  name: 'Home',
>>>>>>> 2e45c33862f7b0764f025c2f1aa784161f97e514
});
</script>

<style lang="less">
h2.funny-title{
  border-top: 5px solid #E0DBDE;
  border-bottom: 5px solid #E0DBDE;
  font-size: 70px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-family: 'Russo One',sans-serif;
  font-weight: 900px;
  letter-spacing: 8px;
}
@-webkit-keyframes move-background {
0%{background-position:-300px 0}
100%{background-position:300px -300px}
}
@-moz-keyframes move-background {
0%{background-position:-300px 0}
100%{background-position:300px -300px}
}
@keyframes move-background {
0%{background-position:-300px 0}
100%{background-position:300px -300px}
}
.section-title {
  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
  animation-play-state: running;
  color: transparent;
  background: url(https://obninsksite.ru/assets/theme/images/blog/square.svg) no-repeat #ECE7EA;
  background-size: cover;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation: move-background 20s infinite linear alternate;
  -moz-animation: move-background 20s infinite linear alternate;
  animation: move-background 20s infinite linear alternate;
}

body {
  margin-top: 100px;
  margin-left: 0;
  margin-right: 0;
}
.burger-link {
  font-size: 20px;
  color: #ebebeb;
  font-weight: bold;
}
.logo-link {
  color: f5efd0;
  font-size: 30px;
  text-shadow: 2px 2px black;
}
h1 {
  padding: 30px 0;
  text-align: center;
  background-color: LightBlue;
  margin: 20px 0;
}
.cont {
  display: flex;
  justify-content: center;
}
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
