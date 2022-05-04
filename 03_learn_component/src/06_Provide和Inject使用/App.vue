<template>
  <div>
    <home></home>
    <button @click="addName">addName</button>
  </div>
</template>

<script>
import { computed } from "vue";
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  // 提供数据
  // provide:{  //普通写法
  //   name: "why",
  //   age: 18,
  // },
  provide() {
    return {
      name: "why",
      age: 18,
      length: computed(() => this.names.length), //ref对象 数据响应式
    };
  },
  data() {
    return {
      names: ["abc", "cba", "zxc"],
    };
  },
  created() {},
  methods: {
    addName() {
      this.names.push("why");
    },
  },
};
</script>

<style scoped>
</style>