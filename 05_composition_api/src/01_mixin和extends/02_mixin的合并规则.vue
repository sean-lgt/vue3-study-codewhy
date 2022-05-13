<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";

export default {
  mixins: [demoMixin],
  data() {
    return {
      title: "Hello World",
      message: "Hello App",
    };
  },
  methods: {
    foo() {
      console.log("app foo");
    },
  },
  computed: {},
  watch: {},
  created() {
    console.log("App created 执行");
  },
};
</script>

<style scoped>
</style>