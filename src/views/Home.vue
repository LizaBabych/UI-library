<template>
  <div id="app">
    <MyButton v-for="i in todos"
        :key="i.id"
        :type="i.type"
        :title="i.title"
        :color="i.color"
        :size="i.size"
      >
    </MyButton>
  </div>
</template>

<script lang="ts">
import MyButton from '@/components/MyButton.vue';
export default({
  name: 'Home',
  components: {
    MyButton,
  },
  data() {
    return {
      todos: [
        { id: 1, title: "Large", color: "success", size: "lg"},
        { id: 2, title: "Large", color: "primary", size: "lg"},
        { id: 3, title: "Large", color: "secondary", size: "lg"},
        { id: 4, title: "Middle", color: "warning"},
        { id: 5, title: "Middle", color: "danger"},
        { id: 6, title: "Default"},
        { id: 7, title: "Small", color: "info", size: "sm"},
        { id: 8, title: "Small", color: "light", size: "sm"},
        { id: 9, title: "Small", color: "dark", size: "sm"},
      ],
    };
  },
});
</script>
