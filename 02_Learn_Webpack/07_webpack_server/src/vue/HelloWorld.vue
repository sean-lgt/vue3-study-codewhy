<template>
  <div class="test" @click="handleShowTips">我是{{ title }}组件</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  methods: {
    handleShowTips() {
      alert("哈哈哈哈");
    },
  },
};
</script>

<style>
.test {
  font-size: 16px;
  font-weight: 600;
}
</style>