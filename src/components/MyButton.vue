<template>
	<div class='button' :class="'button-' + color + ' button-' + size"
	    @click='sendClick()'>
			<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

type Color = 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'primary' | 'secondary';
type Size = 'sm' | 'lg';

export default Vue.extend({
  name: 'MyButton',
  props: {
    size: {
      type: String as () => Size,
    },
    color: {
      type: String as () => Color,
      default: 'primary',
    },
  },
  methods: {
    sendClick(): void {
      this.$emit('click');
    },
  },
});
</script>

<style lang="less">
@primary: DodgerBlue;
@secondary: Gray;
@success: MediumSeaGreen;
@danger: rgb(255, 46, 49);
@warning: Orange;
@info: rgba(0, 189, 255, 0.8);
@dark: rgb(60, 60, 60);
@light: LightGray;

.button {
  padding: 10px;
	border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  color: white;
}
.button.disabled {
  opacity: .5;
  &:hover {
    box-shadow: none;
    cursor: not-allowed;
  }
}
a {
  text-decoration: none;
  color: white;
}
.button-lg {
  padding: 18px;
  font-size: 20px;
}
.button-sm {
  padding: 7px;
  font-size: 15px;
}

.button-primary { .btn(@primary); }
.button-secondary { .btn(@secondary); }
.button-success { .btn(@success); }
.button-danger { .btn(@danger); }
.button-warning { .btn(@warning); }
.button-info { .btn(@info); }
.button-light { .btn(@light); }
.button-dark { .btn(@dark); }

.btn(@color){
  background-color: @color;
  & when(lightness(@color) > 60) {
    color: black;
  }
  &:hover, &:active {
    background-color: darken(@color, 7%);
    cursor: pointer;
    box-shadow: 0 0 10px gray;
  }
}
</style>
