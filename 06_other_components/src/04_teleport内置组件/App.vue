<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#why">
      <span>呵呵呵呵</span>
    </teleport>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

import HelloWorld from "./HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name);
  },
  mounted() {
    console.log(this.$name);
  },
  methods: {
    foo() {
      console.log(this.$name);
    },
  },
};
</script>

<style scoped>
</style>