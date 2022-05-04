<template>
  <div>
    <show-message title="hahahah" content="ceshi"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <!-- 便捷写法 -->
    <show-message v-bind="message"></show-message>
    <!-- 非props的自定义属性，子组件可以通过$attrs获取 -->
    <multi-root-element id="aaa"></multi-root-element>
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";
import MultiRootElement from "./MultiRootElement.vue";
export default {
  components: {
    ShowMessage,
    MultiRootElement,
  },
  data() {
    return {
      title: "haha",
      content: "haha01",
      message: {
        title: "测试",
        content: "这是内容",
      },
    };
  },
};
</script>

<style scoped>
</style>