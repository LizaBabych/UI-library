<template>
  <div>
    <div @click='openModal'>
      <slot name='trigger'>
        <button></button>
      </slot>
    </div>
    <div class='modal-content' v-if="visible">
      <div class='modal-head'>{{head}}</div>
      <div class='modal-body'>{{body}}</div>
      <div class='modal-footer' @click="closeModal">
          <button class='close-button'>{{footer}}</button>
      </div>
    </div>
    <div class='modal' v-if='visible' @click='closeModal'></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Modal',
    props: {
      head: {
        type: String,
        default: 'HEAD',
      },
      body: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      footer: {
        type: String,
        default: 'Close',
      },
    },
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      openModal(): void {
        this.visible = true;
        this.$emit('open');
      },
      closeModal(): void {
        this.visible = false;
        this.$emit('close');
      },
    },
  });
</script>

<style lang="less">
@modal-width: 500px;

.modal-content {
  background-color: rgb(240, 240, 240);
  position: fixed;
  border: 1px solid gray;
  border-radius: 5px;
  width: @modal-width;
  margin: 15% 30%;
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
