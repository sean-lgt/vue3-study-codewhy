<template>
  <div></div>
</template>

<script>
import emitter from "./utils/eventbus";
export default {
  created() {
    emitter.on("why", (info) => {
      console.log("homecontent监听到数据", info);
    });
    // 监听所有事件
    emitter.on("*", (type, info) => {
      console.log("🚀【监听所有emit--type】", type);
      console.log("🚀【监听所有emit--info】", info);
    });
    // 取消mitt事件监听
    // emitter.all.clear()
    // emitter.off("foo", () => {});
  },
};
</script>

<style scoped>
</style>