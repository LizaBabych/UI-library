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
    <h1>Modal</h1>
    <div class="container">
        <h3>Use the component button for actions in forms, dialogs, and more. </h3>
    </div>
    <div class="example">
    <MyModal></MyModal>
    </div>
    <div class="code">
      <pre>
      <<span class="tag">MyModal</span>><<span class="tag">/MyModal</span>></pre>
    </div>
    <div class="container">
        <h3>Modal has three slots: header/body/footer </h3>
    </div>
    <div class="example">
      <MyModal>
        <template #head>
          HEADER
        </template>
        <template #body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </template>
        <template #footer>
          <MyButton>Okey</MyButton>
        </template>
      </MyModal>
    </div>
    <div class="code">
      <pre>
      <<span class="tag">MyModal</span>>
        <<span class="tag">template</span> #<span class="attr">head</span>>
          HEADER
        <<span class="tag">/template</span>>
        <<span class="tag">template</span> #<span class="attr">body</span>>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        <<span class="tag">/template</span>>
        <<span class="tag">template</span> #<span class="attr">footer</span>>
          <<span class="tag">MyButton</span>>Okey<<span class="tag">/MyButton</span>>
        <<span class="tag">/template</span>>
      <<span class="tag">/MyModal</span>></pre>
    </div>
    <div class="container">
        <h3> You can add components, which trigger modal</h3>
    </div>
    <div class="example">
      <MyModal>
        <template #trigger>
          <MyButton>Open modal</MyButton>
        </template>
        <template #head>
          HEADER
        </template>
        <template #body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </template>
        <template #footer>
          <MyButton>Okey</MyButton>
        </template>
      </MyModal>
    </div>
    <div class="code">
      <pre>
      <<span class="tag">MyModal</span>>
        <<span class="tag">template</span> #<span class="attr">trigger</span>>
          <<span class="tag">MyButton</span>>Trigger<<span class="tag">/MyButton</span>>
        <<span class="tag">/template</span>>
        <<span class="tag">template</span> #<span class="attr">head</span>>
          HEADER
        <<span class="tag">/template</span>>
        <<span class="tag">template</span> #<span class="attr">body</span>>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        <<span class="tag">/template</span>>
        <<span class="tag">template</span> #<span class="attr">footer</span>>
          <<span class="tag">MyButton</span>>Okey<<span class="tag">/MyButton</span>>
        <<span class="tag">/template</span>>
      <<span class="tag">/MyModal</span>></pre>
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
import MyButton from '@/components/MyButton.vue';
import MyModal from '@/components/MyModal.vue';
import MyNavbar from '@/components/MyNavbar.vue';
import MyDataTable from '@/components/MyDataTable.vue';

export default({
  name: 'mymodal',
  components: {
    MyModal,
    MyNavbar,
    MyButton,
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
        {id: 30050, prop: 'Color', type: 'String', default: 'medium', required: 'No', description: '...'},
        {id: 30051, prop: 'Size', type: 'String', default: 'primary', required: 'No', description: '...'},
      ],
    };
  },
});
</script>

<style lang="less">
</style>
