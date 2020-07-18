<template>
<<<<<<< HEAD
  <div id="app">
<<<<<<< HEAD
    <MyButton> Default </MyButton>
    <MyButton color="success"> Success </MyButton>
    <MyButton color="danger"> Danger </MyButton>
    <MyButton color="warning"> Warning </MyButton>
    <MyButton color="info"> Info </MyButton>
    <MyButton color="light"> Light </MyButton>
    <MyButton color="dark"> Dark </MyButton>
    <MyButton color="primary"> Primary </MyButton>
    <MyButton color="secondary"> Secondary </MyButton></br>
    <MyButton size="lg"> Default </MyButton>
    <MyButton color="success" size="lg"> Success </MyButton>
    <MyButton color="danger" size="lg"> Danger </MyButton>
    <MyButton color="warning" size="lg"> Warning </MyButton>
    <MyButton color="info" size="lg"> Info </MyButton>
    <MyButton color="light" size="lg"> Light </MyButton>
    <MyButton color="dark" size="lg"> Dark </MyButton>
    <MyButton color="primary" size="lg"> Primary </MyButton>
    <MyButton color="secondary" size="lg"> Secondary </MyButton></br>
    <MyButton size="sm"> Default </MyButton>
    <MyButton color="success" size="sm"> Success </MyButton>
    <MyButton color="danger" size="sm"> Danger </MyButton>
    <MyButton color="warning" size="sm"> Warning </MyButton>
    <MyButton color="info" size="sm"> Info </MyButton>
    <MyButton color="light" size="sm"> Light </MyButton>
    <MyButton color="dark" size="sm"> Dark </MyButton>
    <MyButton color="primary" size="sm"> Primary </MyButton>
    <MyButton color="secondary" size="sm"> Secondary </MyButton>
  </div>
</template>

<script lang="ts">
import MyButton from '@/components/MyButton.vue';
export default({
  name: 'Home',
  components: {
    MyButton,
  },
});
=======
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
>>>>>>> mygrid
=======
  <div>
    <MyModal>
      <template #trigger>
        <button>Open modal</button>
      </template>
      <template #head>
        HEADER
      </template>
      <template #body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </template>
      <template #footer>
        <button>Okey</button>
      </template>
    </MyModal>
  </div>
</template>

<script lang="ts">
  import MyModal from '@/components/MyModal.vue';
  export default {
    name: 'Home',
    components: {
      MyModal,
    },
  };
>>>>>>> mymodal
</script>
