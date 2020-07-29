<template>
  <div id="app">
    <h1>Carousel</h1>
    <div class="container">
      <h3>Use the component carousel for demonstration pictures</h3>
    </div>
    <p class="parag">The carousel is a slideshow for cycling through a series of content, built with CSS transforms.</p>
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
      <h3>Array of pictures</h3>
    </div>
    <p class="parag">For pictures to be displayed in the carousel, you must specify them in the required property.</p>
    <div class="code">
    <pre>
    data() {
      <span style="color: Violet">return</span> {
        pictures: [
          <span class="attr-string">'https://loremflickr.com/320/240/dog'</span>,
          <span class="attr-string">'https://loremflickr.com/g/320/240/paris'</span>,
          <span class="attr-string">'https://loremflickr.com/320/240/paris,girl/all'</span>,
          <span class="attr-string">'https://loremflickr.com/320/240/dog'</span>,
          <span class="attr-string">'https://loremflickr.com/g/320/240/paris'</span>,
          <span class="attr-string">'https://loremflickr.com/320/240/paris,girl/all'</span>,
          <span class="attr-string">'https://loremflickr.com/320/240/dog'</span>,
          <span class="attr-string">'https://loremflickr.com/g/320/240/paris'</span>,
          <span class="attr-string">'https://loremflickr.com/320/240/paris,girl/all'</span>,
        ],
      },
    },</pre>
    </div>
    <div class="container">
      <h3>Sizing</h3>
    </div>
    <p class="parag">Set the imageWidth property to set the size</p>
    <div class="example">
      <MyCarousel :pictures="pictures" imageWidth="400">
      </MyCarousel></br>
    </div>
    <div class="code">
    <pre>
      <<span class="tag">MyCarousel </span>:<span class="attr">pictures</span>=<span class="attr-string">"pictures"</span>
      <span class="attr">imageWidth</span>=<span class="attr-string">"500"</span>>
      <<span class="tag">/MyCarousel</span>></pre>
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
       {id: 1, prop: 'pictures', type: 'Array', default: '-', required: 'Yes', description: 'To display pictures, you need to specify an array of images.'},
       {id: 2, prop: 'imageWidth', type: 'String', default: '320', required: 'No', description: 'To set the width of the carousel, specify it in the property'},
     ],
    };
  },
});
</script>

<style lang="less">
</style>
