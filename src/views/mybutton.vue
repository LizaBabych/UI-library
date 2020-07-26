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
    <h1>Button</h1>
    <div class="container">
        <h3>Use the component button for actions in forms, dialogs, and more. </h3>
    </div>
    <div class="example">
      <MyButton color="success"> Success </MyButton>
      <MyButton color="danger"> Danger </MyButton>
      <MyButton color="warning"> Warning </MyButton>
    </div>
    <div class="code">
      <p>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"success"</span>> Success <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"danger"</span>> Danger <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"warning"</span>> Warning <
          <span class="tag">/MyButton</span>>
      </p>
    </div>
    <div class="container">
      <h3>Default button</h3>
    </div>
    <div class="example">
      <MyButton> Default </MyButton></br>
    </div>
    <div class="code">
      <p><<span class="tag">MyButton</span>> Default <<span class="tag">/MyButton</span>></p>
    </div>
    <div class="container">
      <h3>Solid color variant</h3>
    </div>
    <div class="param">
      <p>#success #danger #warning #light #dark #primary #secondary</p>
    </div>
    <div class="example">
      <MyButton color="success"> Success </MyButton>
      <MyButton color="danger"> Danger </MyButton>
      <MyButton color="warning"> Warning </MyButton>
      <MyButton color="light"> Light </MyButton>
      <MyButton color="dark"> Dark </MyButton>
      <MyButton color="primary"> Primary </MyButton>
      <MyButton color="secondary"> Secondary </MyButton></br>
    </div>
    <div class="code">
      <p>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"success"</span>> Success <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"danger"</span>> Danger <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"warning"</span>> Warning <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"light"</span>> Light <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"dark"</span>> Dark <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"primary"</span>> Primary <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"secondary"</span>> Secondary <
          <span class="tag">/MyButton</span>>
      </p>
    </div>
    <div class="container">
      <h3>Sizing</h3>
    </div>
    <div class="param">
      <p>#lg #sm</p>
    </div>
    <div class="example">
      <MyButton size="lg"> Big </MyButton>
      <MyButton> Medium </MyButton>
      <MyButton size="sm"> Small </MyButton>
    </div>
    <div class="code">
      <p>
        <<span class="tag">MyButton </span>
          <span class="attr">size</span>=<span class="attr-string">"lg"</span>> Big <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span> > Meddium <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">size</span>=<span class="attr-string">"sm"</span>> Small <
          <span class="tag">/MyButton</span>>
      </p>
    </div>
    <div class="container">
      <h3>Buttons has disable parametr</h3>
    </div>
    <div class="example">
      <MyButton color="success" class="disabled"> Disabled </MyButton>
      <MyButton color="danger" class="disabled"> Disabled </MyButton>
      <MyButton color="warning" class="disabled"> Disabled </MyButton>
      <MyButton color="light" class="disabled"> Disabled </MyButton>
      <MyButton color="dark" class="disabled"> Disabled </MyButton>
      <MyButton color="primary" class="disabled"> Disabled </MyButton>
      <MyButton color="secondary" class="disabled"> Disabled </MyButton></br>
    </div>
    <div class="code">
      <p>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"success" </span>
          <span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"danger" </span>
          <span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"warning" </span>
          <span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"light" </span>
          <span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"dark" </span>
          <span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"primary" </span>
          <span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <
          <span class="tag">/MyButton</span>></br>
        <<span class="tag">MyButton </span>
          <span class="attr">color</span>=<span class="attr-string">"secondary" </span>
          <span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <
          <span class="tag">/MyButton</span>></br>
      </p>
    </div>
    <div class="container">
      <h3>The button takes such parameters</h3>
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
import MyNavbar from '@/components/MyNavbar.vue';
import MyDataTable from '@/components/MyDataTable.vue';

export default({
  name: 'mybutton',
  components: {
    MyButton,
    MyNavbar,
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
      ],
      users: [
        {id: 30050, prop: 'Color', type: 'String', default: 'medium', required: 'No'},
        {id: 30051, prop: 'Size', type: 'String', default: 'primary', required: 'No'},
      ],
    };
  },
});
</script>

<style lang="less">
  h3 {
    font-weight: normal;
  }
  .container {
    display: flex;
    justify-content: center;
    background-color: wheat;
    padding: 10px;
    font-size: 22px;
    margin: 15px 0;
  }
  .example {
    display: flex;
    justify-content: center;
    align-items: baseline;
    border: 1px solid rgba(0,0,0,.125);
    padding: 15px;
  }
  .param {
    display: flex;
    justify-content: center;
    & p {
      color: Violet;
    }
  }
  .tag {
    color: #e45649;
  }
  .attr {
    color: #986801;
  }
  .attr-string {
    color: #50a14f;
  }
  .code {
    display: flex;
    justify-content: center;
    background-color: #f9f9f9;
    margin: 5px 25%;
    font-size: 18px;
    color: #383a42;
    padding: 15px;
    box-shadow: 0 1px 1px rgba(0,0,0,.125);
  }
</style>
