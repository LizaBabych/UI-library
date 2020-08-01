<template>
  <div id="app">
    <h2 class="title-component section-title">Button</h2>
    <div class="container">
      <h3>Use MyButton component for actions in forms, dialogs, and more.</h3>
    </div>
    <p class="parag">Includes support for sizes and colors.</p>
    <div class="example">
      <MyButton color="success"> Success </MyButton>
      <MyButton color="danger"> Danger </MyButton>
      <MyButton color="warning"> Warning </MyButton>
    </div>
    <div class="code">
      <pre><<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"success"</span>> Success <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"danger"</span>> Danger <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"warning"</span>> Warning <<span class="tag">/MyButton</span>></pre>
    </div>
    <div class="container">
      <h3>Default button</h3>
    </div>
    <p class="parag">By default, the button has a color - primary, size - medium.</p>
    <div class="example">
      <MyButton> Default </MyButton></br>
    </div>
    <div class="code">
      <pre><<span class="tag">MyButton</span>> Default <<span class="tag">/MyButton</span>></pre>
    </div>
    <div class="container">
      <h3>Solid color variant</h3>
    </div>
    <p class="parag">Use the variant prop to generate the various contextual button variants.</p>
    <p class="param">#success #danger #warning #light #dark #primary #secondary</p>
    <div class="example">
      <MyButton color="success"> Success </MyButton>
      <MyButton color="danger"> Danger </MyButton>
      <MyButton color="warning"> Warning </MyButton>
      <MyButton color="light"> Light </MyButton>
      <MyButton color="dark"> Dark </MyButton>
      <MyButton color="primary"> Primary </MyButton>
      <MyButton color="secondary"> Secondary </MyButton>
    </div>
    <div class="code">
      <pre><<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"success"</span>> Success <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"danger"</span>> Danger <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"warning"</span>> Warning <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"light"</span>> Light <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"dark"</span>> Dark <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"primary"</span>> Primary <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"secondary"</span>> Secondary <<span class="tag">/MyButton</span>></pre>
    </div>
    <div class="container">
      <h3>Sizing</h3>
    </div>
    <p class="parag">Use the variant prop to generate the sizing button variants.</p>
    <p class="parag">By default, the button will be displayed at a medium size.</p>
    <p class="param">#lg #sm</p>
    <div class="example">
      <MyButton size="lg"> Big </MyButton>
      <MyButton> Medium </MyButton>
      <MyButton size="sm"> Small </MyButton>
    </div>
    <div class="code">
      <pre><<span class="tag">MyButton </span><span class="attr">size</span>=<span class="attr-string">"lg"</span>> Big <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton</span>> Meddium <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">size</span>=<span class="attr-string">"sm"</span>> Small <<span class="tag">/MyButton</span>></pre>
    </div>
    <div class="container">
      <h3>Disabled state</h3>
    </div>
    <p class="parag">Set the disabled class to disable button default functionality.</p>
    <div class="example">
      <MyButton color="success" class="disabled"> Disabled </MyButton>
      <MyButton color="danger" class="disabled"> Disabled </MyButton>
      <MyButton color="warning" class="disabled"> Disabled </MyButton>
      <MyButton color="light" class="disabled"> Disabled </MyButton>
      <MyButton color="dark" class="disabled"> Disabled </MyButton>
      <MyButton color="primary" class="disabled"> Disabled </MyButton>
      <MyButton color="secondary" class="disabled"> Disabled </MyButton>
    </div>
    <div class="code">
      <pre><<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"success" </span><span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"danger" </span><span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"warning" </span><span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"light" </span><span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"dark" </span><span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"primary" </span><span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <<span class="tag">/MyButton</span>>
<<span class="tag">MyButton </span><span class="attr">color</span>=<span class="attr-string">"secondary" </span><span class="attr">class</span>=<span class="attr-string">"disabled"</span>> Disabled <<span class="tag">/MyButton</span>></pre>
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
    <div class="container">
      <h3>Events</h3>
    </div>
    <div class="example">
      <MyDataTable
        :config="configEvent"
        :users="usersEvent"
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
        {title: 'Description', value: 'description'},
      ],
      users: [
        {id: 1, prop: 'Color', type: 'String', default: 'medium', required: 'No', description: 'Applies one of the theme color variants to the component'},
        {id: 2, prop: 'Size', type: 'String', default: 'primary', required: 'No', description: 'Set the size of the component\'s appearance. \'sm\' or \'lg\''},
      ],
      configEvent: [
        {title: '№', value: '_index'},
        {title: 'Event', value: 'event'},
        {title: 'Arguments', value: 'arg'},
        {title: 'Description', value: 'description'},
      ],
      usersEvent: [
        {id: 1, event: 'sendClick', arg: '-',
        description: 'Describe the event that should occur when the button is clicked.'},
      ],
    };
  },
});
</script>

<style lang="less">

</style>
