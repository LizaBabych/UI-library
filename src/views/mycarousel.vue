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
    <h1>Carousel</h1>
    <div class="container">
      <p>Use the component carousel for demonstration pictures</p>
    </div>
    <div class="example">
      <MyCarousel :pictures="pictures">
      </MyCarousel>
    </div>
    <div class="code">
    <pre>
    <<span class="tag">MyCarousel </span>:<span class="attr">pictures</span>=<span class="attr-string">"pictures"</span>>
    <<span class="tag">/MyCarousel</span>></pre>
    </div>
    <div class="container">
      <p>Carousel has different sizes</p>
    </div>
    <div class="param">
      <p>#image width = 500</p>
    </div>
    <div class="example">
      <MyCarousel :pictures="pictures" imageWidth="500">
      </MyCarousel></br>
    </div>
    <div class="code">
    <pre>
      <<span class="tag">MyCarousel </span>:<span class="attr">pictures</span>=<span class="attr-string">"pictures"</span>
      <span class="attr">imageWidth</span>=<span class="attr-string">"500"</span>>
      <<span class="tag">/MyCarousel</span>></pre>
    </div>
    <div class="param">
      <p>#image width = 250</p>
    </div>
    <div class="example">
      <MyCarousel :pictures="pictures" imageWidth="250">
      </MyCarousel>
    </div>
    <div class="code">
    <pre>
    <<span class="tag">MyCarousel </span>:<span class="attr">pictures</span>=<span class="attr-string">"pictures"</span>
    <span class="attr">imageWidth</span>=<span class="attr-string">"250"</span>>
    <<span class="tag">/MyCarousel</span>></pre>
    </div>
    <div class="container">
      <p>Properties</p>
    </div>
    <MyDataTable
      :config="config"
      :users="users"
    >
    </MyDataTable>
  </div>
</template>

<script lang="ts">
import MyCarousel from '@/components/MyCarousel.vue';
import MyNavbar from '@/components/MyNavbar.vue';
import MyDataTable from '@/components/MyDataTable.vue';

export default({
  name: 'mycarousel',
  components: {
    MyCarousel,
    MyNavbar,
    MyDataTable,
  },
  data() {
    return {
      pictures: [
      'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
       'https://loremflickr.com/320/240/paris,girl/all',
     ],
     config: [
       {title: '№', value: '_index'},
       {title: 'Prop', value: 'prop'},
       {title: 'Type', value: 'type'},
       {title: 'Default', value: 'default'},
       {title: 'Required', value: 'required'},
       {title: 'Description', value: 'description'},
     ],
     users: [
       {id: 30050, prop: 'pictures', type: 'Array', default: '-', required: 'Yes', description: '...'},
       {id: 30051, prop: 'imageWidth', type: 'String', default: '320', required: 'No', description: '...'},
     ],
    };
  },
});
</script>

<style lang="less">
</style>
