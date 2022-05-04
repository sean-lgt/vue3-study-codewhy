<template>
  <div>
    <button @click="increment">点我+1</button>
    <button @click="decrement">点我-1</button>
    <input type="text" v-model.number="num" />
    <button @click="incrementN">点我+n</button>
  </div>
</template>

<script>
export default {
  // emits:['add','sub','addN'], //数组写法，表明需要emit的事件
  // 对象写法，目的是为了进行参数的校验
  emits: {
    add: null,
    sub: null,
    addN: (num, name, age) => {
      console.log(num, name, age);
      if (num > 10) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      console.log("🚀【点击了+1】");
      this.$emit("add");
    },
    decrement() {
      console.log("🚀【点击了-1】");
      this.$emit("sub");
    },
    incrementN() {
      this.$emit("addN", this.num, "sean", 18);
    },
  },
};
</script>

<style scoped>
</style>