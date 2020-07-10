<templates>
  <div>

    <button class="modal-trigger" data-target="modal"
        @click="openModal()">
    		<slot>{{title}}</slot>
        <!-- <slot v-slot:trigger></slot> -->
    </button>
</div>
</templates>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'MyModal',
  methods: {
    openModal() {
      this.$emit('click');
      visible: true;
    },
    closeModal() {
      this.$emit('click');
      visible: false;
    },
  },
  data() {
    return {
      visible: false,
    };
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
  margin: 15% 30%;

  & h2 {
    margin: 0 0 20px 0;
    padding-left: 10px;
  }
}

button {
  background-color: rgb(180, 180, 180);
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.8);
}

.modal-head {
   background-color: rgb(180, 180, 180);
   display: flex;
   padding: 5px 5px 0 0;
   justify-content: space-between;
   align-items: flex-start;
   border-bottom: 1px solid black;
   font-size: 18px;
}

.modal-body {
  text-align: center;
  padding-top: 10px;
}

.modal-footer {
  display: flex;
  justify-content: center;
}
</style>
