<template>
  <div id="app">
    <Row>
      <Column>1 of 1</Column>
    </Row>
    <Row>
      <Column>1 of 2</Column>
      <Column>2 of 2</Column>
    </Row>
    <Row>
      <Column>1 of 3</Column>
      <Column>2 of 3</Column>
      <Column>3 of 3</Column>
    </Row>
    <Row>
      <Column>1 of 4</Column>
      <Column>2 of 4</Column>
      <Column>3 of 4</Column>
      <Column>4 of 4</Column>
    </Row>
    <Row>
      <Column>1 of 6</Column>
      <Column>2 of 6</Column>
      <Column>3 of 6</Column>
      <Column>4 of 6</Column>
      <Column>5 of 6</Column>
      <Column>6 of 6</Column>
    </Row>
    <Row>
      <Column>1 of 13</Column>
      <Column>2 of 12</Column>
			<Column>3 of 12</Column>
			<Column>4 of 12</Column>
      <Column>5 of 12</Column>
      <Column>6 of 12</Column>
			<Column>7 of 12</Column>
			<Column>8 of 12</Column>
      <Column>9 of 12</Column>
      <Column>10 of 12</Column>
			<Column>11 of 12</Column>
			<Column>12 of 12</Column>
    </Row>
  </div>
</template>

<script>
	import Row from '@/components/grid/Row.vue';
	import Column from '@/components/grid/Column.vue';

	export default {
		components: {
			Row,
			Column,
		},
		data () {
			return {
				cols: '12'
			};
		},
	}
</script>

<style lang="less">
</style>
