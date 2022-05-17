<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup() {
    const info = reactive({
      name: "why",
      age: 18,
    });
    // 1、toRefs 将reactive对象中的所有属性都转成ref，简历连接
    // let { name, age } = toRefs(info);

    // 2、toRef 对其中一个属性进行转换 ref，建立连接
    let { name } = info;
    let age = toRef(info, "age");

    const changeAge = () => {
      age.value++;
      // name = "test"; //非响应式的
    };
    return {
      name,
      age,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>