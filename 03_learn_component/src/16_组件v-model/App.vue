<template>
  <div>
    <!-- <input v-model="message">
    <input :value="message" @input="message = $event.target.value"> -->

    <!-- 组件上使用v-model -->
    <!-- <hy-input v-model="message"></hy-input> -->
    <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->

    <!-- 绑定两个v-model -->
    <hy-input v-model="message" v-model:title="title"></hy-input>

    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import HyInput from "./HyInput.vue";
// import HyInput from "./HyInput2.vue";

export default {
  components: {
    HyInput,
  },
  data() {
    return {
      message: "Hello World",
      title: "哈哈哈",
    };
  },
};
</script>

<style scoped>
</style>