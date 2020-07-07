<template>
  <div id="app">
    <!-- <router-view/> -->
    <MyButton v-for="(color, idx) in colors"
							:key="idx"
							:color="color"
			> Button
		</MyButton></br>
    <MyButton v-for="(color, idx) in colors"
							:key="idx"
							:color="color"
              :size="size"
			> Button
		</MyButton></br>
    <MyButton v-for="(color, idx) in colors"
							:key="idx"
							:color="color"
              :size="lg"
			> Button
		</MyButton>
  </div>
</template>

<script lang="ts">
import MyButton from '@/components/MyButton.vue';

export default({
  components: {
    MyButton,
  },
  data() {
    return {
      colors: ['danger', 'success', 'warning', 'info', 'primary', 'secondary', 'light', 'dark'],
      sizes: ['sm', 'lg'],
    };
  },
});
</script>

<style lang="less">
</style>
