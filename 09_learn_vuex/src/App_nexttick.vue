<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <h2 class="title" ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref, onUpdated, nextTick } from "vue";

export default {
  setup() {
    const message = ref("");
    const titleRef = ref(null);

    const counter = ref(0);

    const addMessageContent = () => {
      message.value += "哈哈哈哈哈哈哈哈哈哈";

      // 更新DOM
      nextTick(() => {
        console.log(titleRef.value.offsetHeight);
      });
    };

    const increment = () => {
      for (let i = 0; i < 100; i++) {
        counter.value++;
      }
    };

    onUpdated(() => {});

    return {
      message,
      counter,
      increment,
      titleRef,
      addMessageContent,
    };
  },
};
</script>

<style scoped>
.title {
  width: 120px;
}
</style>