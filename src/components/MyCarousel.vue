<template>
  <div>
    <div class='slider'>
      <img
        v-for='(img, index) in pictures'
        :key='index'
        :src='img' alt='Picture not found'
      >
    <button class='prev' @click="showSlides(slideNum -= 1, pictures)"> < </button>
    <button class='next' @click="showSlides(slideNum += 1, pictures)"> > </button>
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
      },
      imageWidth: {
        type: Number,
        default: 320,
      },
    },
    data: function () {
      return {
        slideNum: 1,
      };
    },
    methods: {
      showSlides(slideNum, slides) {
        slides.forEach((item) => {
          return {
           'noDisplay': item
			    };
        });
        return {
         'display': slides[slideNum - 1]
        };
      },
    },
    computed: {
      changeImage(): object {
        return { transform: 'translateX(' + (-this.imageWidth * this.counter) + 'px)' };
      },
    },
  });
</script>

<style scoped lang="less">
@button-color: rgba(159, 99, 71, 0.5);

.slider {
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
