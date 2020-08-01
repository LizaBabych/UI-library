<template>
	<div class="col" :class="{['col-' + cols]: cols}" :style="{backgroundColor: this.color}">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

type Column = string | number;
type Color = string;

export default Vue.extend({
  name: 'Column',
  props: {
   cols: {
      type: String as () => Column,
   },
   color: {
     type: String as () => Color,
     default: 'gray',
   },
  },
});
</script>

<style lang="less">
@columns: 12;
.col {
	border: 1px solid black;
	padding: 15px 0;
  flex-grow: 1;
  flex-shrink: 1;
}
.grid(@columns, @i: 1) when (@i =< @columns) {
	.col-@{i} {
    width: percentage(@i / @columns) - 0.83px;
	}
	.grid(@columns, (@i + 1));
}
.grid(@columns);
</style>
