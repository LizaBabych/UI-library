<template>
  <div>
    <div @click='openModal'>
      <slot name='trigger'>
        <button></button>
      </slot>
    </div>
    <div class='modal-content' v-if="visible">
      <div class='modal-head'>
        <slot name="head">Head</slot>
      </div>
      <div class='modal-body'>
        <slot name="body">Body</slot>
      </div>
      <div class='modal-footer' @click="closeModal">
        <slot name="footer">Footer</slot>
      </div>
    </div>
    <div class='modal' v-if='visible' @click='closeModal'></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'MyModal',
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      openModal(): void {
        this.visible = true;
        this.$emit('openModal');
      },
      closeModal(): void {
        this.visible = false;
        this.$emit('closeModal');
      },
    },
  });
</script>

<style scoped lang="less">
@modal-width: 500px;

.modal-content {
  background-color: rgb(240, 240, 240);
  position: fixed;
  border: 1px solid gray;
  border-radius: 5px;
  width: @modal-width;
  margin-left: 30%;
  z-index: 10;

  & h2 {
    margin: 0 0 20px 0;
    padding-left: 10px;
  }
}

button {
  background-color: rgb(180, 180, 180);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
}

.modal-head {
   background-color: rgb(180, 180, 180);
   display: flex;
   padding: 5px;
   justify-content: space-between;
   align-items: flex-start;
   border-bottom: 1px solid black;
   font-size: 18px;
}

.modal-body {
  text-align: center;
  padding: 10px 10px;
}

.modal-footer {
  display: flex;
  justify-content: center;
  padding: 0 10px 10px 10px;
}
</style>
