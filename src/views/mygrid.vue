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

    <h1>Grid</h1>
    <div class="container">
      <p>Use the component grid for actions in forms, dialogs, and more. </p>
    </div>
    <Row>
      <Column>3</Column>
      <Column>3</Column>
      <Column>3</Column>
    </Row>
    <div class="code">
    <pre>
    <<span class="tag">Row</span>>
       <<span class="tag">Column</span>>3<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>3<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>3<<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>></pre>
    </div>
    <div class="container">
      <p>Maximum columns is 12</p>
    </div>
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
    <div class="code">
    <pre>
    <<span class="tag">Row</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
      <<span class="tag">Column</span>>12<<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>></pre>
    </div>
    <div class="container">
      <p>Also you can use one, two, four and six columns</p>
    </div>
    <Row>
      <Column>1</Column>
    </Row>
    <Row>
      <Column>2</Column>
      <Column>2</Column>
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
    <div class="code">
    <pre>
    <<span class="tag">Row</span>>
       <<span class="tag">Column</span>>1<<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>>
    <<span class="tag">Row</span>>
       <<span class="tag">Column</span>>2<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>2<<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>>
    <<span class="tag">Row</span>>
       <<span class="tag">Column</span>>4<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>4<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>4<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>4<<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>>
    <<span class="tag">Row</span>>
       <<span class="tag">Column</span>>6<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>6<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>6<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>6<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>6<<span class="tag">/Column</span>>
       <<span class="tag">Column</span>>6<<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>></pre>
    </div>
    <div class="container">
      <p>You can choose background color of the columns</p>
    </div>
    <Row>
      <Column color="green">Green</Column>
      <Column color="red">Red</Column>
      <Column color="blue">Blue</Column>
    </Row>
    <div class="code">
    <pre>
    <<span class="tag">Row</span>>
       <<span class="tag">Column </span><span class="attr">color</span>=<span class="attr-string">"green"</span>>Green<<span class="tag">/Column</span>>
       <<span class="tag">Column </span><span class="attr">color</span>=<span class="attr-string">"red"</span>>Red<<span class="tag">/Column</span>>
       <<span class="tag">Column </span><span class="attr">color</span>=<span class="attr-string">"blue"</span>>Blue<<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>></pre>
    </div>
    <div class="container">
      <p>You can use grid inside a grid</p>
    </div>
    <Row>
      <Column color="LightGrey">
        <Row>
          <Column>2</Column>
          <Column>2</Column>
        </Row>
      </Column>
    </Row>
    <div class="code">
    <pre>
    <<span class="tag">Row</span>>
       <<span class="tag">Column </span><span class="attr">color</span>=<span class="attr-string">"LightGrey"</span>
         <<span class="tag">Row</span>>
            <<span class="tag">Column</span>>2<<span class="tag">/Column</span>>
            <<span class="tag">Column</span>>2<<span class="tag">/Column</span>>
         <<span class="tag">/Row</span>>
       <<span class="tag">/Column</span>>
    <<span class="tag">/Row</span>></pre>
    </div>
    <div class="container">
      <p>Properties</p>
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
import MyNavbar from '@/components/MyNavbar.vue';
import Row from '@/components/grid/Row.vue';
import Column from '@/components/grid/Column.vue';
import MyDataTable from '@/components/MyDataTable.vue';

export default({
  name: 'mygrid',
  components: {
    MyNavbar,
    Row,
    Column,
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
        {title: 'Description', value: 'description'},
      ],
      users: [
        {id: 30051, prop: 'Cols', type: 'String', default: '-', required: 'No', description: '...'},
        {id: 30050, prop: 'Colors', type: 'String', default: 'grey', required: 'No', description: '...'},
      ],
    };
  },
});
</script>

<style lang="less">
</style>
