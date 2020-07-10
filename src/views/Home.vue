<template>
  <div id="app">
    <Row>
      <Column>1</Column>
    </Row>
    <Row>
      <Column>2</Column>
      <Column>2</Column>
    </Row>
    <Row>
      <Column>3</Column>
      <Column>3</Column>
      <Column>3</Column>
    </Row>
    <Row>
      <Column>4</Column>
      <Column>4</Column>
      <Column>4</Column>
      <Column>4</Column>
    </Row>
    <Row>
      <Column>6</Column>
      <Column>6</Column>
      <Column>6</Column>
      <Column>6</Column>
      <Column>6</Column>
      <Column>6</Column>
    </Row>
    <Row>
      <Column>12</Column>
      <Column>12</Column>
			<Column>12</Column>
			<Column>12</Column>
      <Column>12</Column>
      <Column>12</Column>
			<Column>12</Column>
			<Column>12</Column>
      <Column>12</Column>
      <Column>12</Column>
			<Column>12</Column>
			<Column>12</Column>
    </Row>
  </div>
</template>

<script>

import Row from '@/components/grid/Row.vue';
import Column from '@/components/grid/Column.vue';

export default {
  name: 'Home',
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
