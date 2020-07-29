<template>
  <div id="carousel">
    <div class='slider' :style="{ width: this.imageWidth + 'px' }">
      <div class='slide' :style="sliding">
        <img
          v-for='(img, index) of pictures'
          :key='index'
          :src='img' alt='Picture not found'
          :width="imageWidth"
        >
      </div>
      <button class="prev"
        v-if="slideNum != 0"
        @click="slideNum--"
      ><</button>
      <button class="next"
        v-if="slideNum != pictures.length-1"
        @click="slideNum++;"
      >></button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  type ICarouselConfig = string[];

  export default Vue.extend({
    name: 'MyCarousel',
    props: {
      pictures: {
        type: Array as () => ICarouselConfig,
        required: true,
      },
      imageWidth: {
        type: String,
        default: '320',
      },
    },
    data() {
      return {
        slideNum: 0,
      };
    },
    computed: {
      sliding(): {[k: string]: string} {
        return { 'margin-left': -this.slideNum * +this.imageWidth + 'px'};
      },
    },
  });
</script>

<style lang="less">
@button-color: rgba(159, 99, 71, 0.5);
#carousel {
  display: flex;
  justify-content: center;
}
.slide {
  transition: 1s;
  display: flex;
}
.slider {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.prev, .next  {
  background-color: @button-color;
  position: absolute;
  cursor: pointer;
  font-size: 18px;
  margin-top: 30%;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}
.prev { left: 0; }
.next { right: 0; }
.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
</style>
