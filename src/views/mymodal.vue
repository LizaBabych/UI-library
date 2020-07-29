<template>
  <div id="app">
    <h1>Modal</h1>
    <div class="container">
      <h3>Default modal window</h3>
    </div>
    <div class="example">
    <MyModal></MyModal>
    </div>
    <div class="code">
      <pre><<span class="tag">MyModal</span>><<span class="tag">/MyModal</span>></pre>
    </div>
    <div class="container">
      <h3>Slots</h3>
    </div>
    <p class="parag">The modal includes a header, body, and footer.</p>
    <p class="parag">To specify the value of the body header and footer, you need to specify the content in the "template" tag.</p>
    <p class="parag">There is a button in the header of the modal window, by clicking which the window is closed.</p>
    <p class="param">#head #body #footer</p>
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
      <h3>Trigger slot</h3>
    </div>
    <p class="parag">Specify the component that will cause the modal to open.</p>
    <p class="param">#trigger</p>
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
      <h3>Events</h3>
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
        {title: 'Event', value: 'event'},
        {title: 'Arguments', value: 'arg'},
        {title: 'Description', value: 'description'},
      ],
      users: [
        {id: 1, event: 'openModal', arg: '-',
        description: 'Open current modal window'},
        {id: 2, event: 'closeModal', arg: '-',
        description: 'Close current modal window'},
      ],
    };
  },
});
</script>

<style lang="less">
</style>
