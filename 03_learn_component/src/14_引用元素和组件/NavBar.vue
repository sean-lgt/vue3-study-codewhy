<template>
  <div>
    <button @click="getParentAndRoot">获取根组件/父组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "我是NavBar中的message",
    };
  },
  methods: {
    sayHello() {
      console.log("say Hello");
    },
    getParentAndRoot() {
      console.log("🚀【parent】", this.$parent);
      console.log("🚀【root】", this.$root);
    },
  },
};
</script>

<style scoped>
</style>