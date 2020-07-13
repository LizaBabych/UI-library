<template>
  <div>
    <MyCarousel :pictures="pictures">
    </MyCarousel>
  </div>
</template>

<script lang="ts">
  import MyCarousel from '@/components/MyCarousel.vue';
  export default {
    name: 'Home',
    components: {
      MyCarousel,
    },
    data() {
      return {
        pictures:
        ['https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
         'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
         'https://loremflickr.com/320/240/paris,girl/all', 'https://loremflickr.com/320/240/dog', 'https://loremflickr.com/g/320/240/paris',
         'https://loremflickr.com/320/240/paris,girl/all'],
      };
    },
  };
</script>
