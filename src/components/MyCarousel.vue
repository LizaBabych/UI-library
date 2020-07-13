<template>
  <div>
    <div class='slides'>
      <img src='https://loremflickr.com/320/240/dog' alt='Error'>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'MyCarousel',
    props: {
      pictures: {
        type: Array,
        default: ['https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
         'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
         'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
         'https://loremflickr.com/320/240/paris,girl/all'],
      },
    },
    methods: {

    },
  });
</script>

<style scoped lang="less">
@button-color: rgba(159, 99, 71, 0.5);

#slider {
  margin-left: 38%;
  position: relative;
  & button {
    background-color: @button-color;
  }
}

.prev, .next  {
  position: absolute;
  cursor: pointer;
  font-size: 18px;
  margin-top: 12.5%;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

.prev { left: 0; }

.next { left: 294px; }

.noDisplay {display: none; }

.display {display: block; }

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
</style>
