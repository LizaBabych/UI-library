<template>
  <div id="app">
    <h1>Grid</h1>
    <div class="container">
      <h3>Layout and Grid System</h3>
    </div>
    <p class="parag">Grid system uses a series of containers, rows, and columns to layout and align content.</p>
    <p class="parag">The example creates three equal-width columns on small, medium, large, and extra large devices using predefined grid classes. Those columns are centered in the page.</p>
    <p class="parag">Thanks to flexbox, grid columns without a set width will automatically layout with equal widths.</p>
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
      <h3>Auto-layout columns</h3>
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
    <<span class="tag">/Row</span>>
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
      <h3>Background color of columns</h3>
    </div>
    <p class="parag">Specify a background color.</p>
    <p class="parag">Default color is gray.</p>
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
      <h3>Nested rows</h3>
    </div>
    <p class="parag">Insert new row into the column so that this line appears in it as shown in the example below.</p>
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
      <h3>Properties</h3>
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
        {id: 1, prop: 'сols', type: 'String', default: '-', required: 'No',
        description: 'Specify the number of columns'},
        {id: 2, prop: 'сolors', type: 'String', default: 'grey', required: 'No',
        description: 'Specify a background color'},
      ],
    };
  },
});
</script>

<style lang="less">
</style>
