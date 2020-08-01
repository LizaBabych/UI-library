<template>
  <div>
    <div @click='openModal'>
      <slot name='trigger'>
        <button class="openMod">Open</button>
      </slot>
    </div>
    <div class='modal' v-if='visible'></div>
    <div class="modal-container" v-if='visible'>
      <div class='modal-content'>
        <div class='modal-head'>
          <slot name="head">Head</slot>
          <button @click='closeModal'>X</button>
        </div>
        <div class='modal-body'>
          <slot name="body">Body</slot>
        </div>
        <div class='modal-footer' @click="closeModal">
          <slot name="footer">Footer</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'MyModal',
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
    data() {
      return {
        visible: false,
      };
    },
  });
</script>

<style lang="less">
@modal-width: 500px;
.modal-container {
  display: flex;
  justify-content: center;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 5;
}
.modal-content {
  background-color: rgb(240, 240, 240);
  border: 1px solid gray;
  border-radius: 5px;
  width: @modal-width;
}
.modal {
  z-index: 1;
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

@media screen and (max-width: 768px) {
  .modal-content {
    width: 100%;
  }
}
</style>
