<template>
	<div class="row">
		<slot></slot>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	export default Vue.extend({
		name: 'Row',
	});
</script>

<style>
  .row {
    padding: 15px 0;
    text-align: center;
    display: flex;
		flex-flow: row wrap;
  }
</style>
