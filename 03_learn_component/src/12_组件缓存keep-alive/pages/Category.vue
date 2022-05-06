<template>
  <div>
    Category组件
    <button @click="addNum">+1</button>
    <div>值为：{{ num }}</div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      num: 0,
    };
  },
  created() {
    console.log("category created");
  },
  unmounted() {
    console.log("category unmounted");
  },
  activated() {
    console.log("category activated");
  },
  deactivated() {
    console.log("category deactivated");
  },
  methods: {
    addNum() {
      this.num += 1;
    },
  },
};
</script>

<style scoped>
</style>