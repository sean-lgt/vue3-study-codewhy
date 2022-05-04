<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  // props: ["title", "content"],
  inheritAttrs: false, //禁用非props的attribute，也可以使用 $attrs 访问
  props: {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      default: "这是内容",
    },
    // 基础类型检查 null和undefined 会通过任何类型验证
    propA: String,
    // 可能是多个类型
    propB: [String, Number],
    // 对象或数组的默认值，必须从一个工厂函数中获取
    info: {
      type: Object,
      default() {
        return {};
      },
    },
    // 自定义校验函数
    propC: {
      validator(value) {
        return ["success", "warning", "danger"].includes(value);
      },
    },
    // 具有默认值的函数
    propD: {
      type: Function,
      // 用作默认值的函数
      default() {
        return "Default function";
      },
    },
  },
};
</script>

<style scoped>
</style>