<template>
  <div>
    <home></home>
    <async-category></async-category>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Home from "./Home.vue";
// import AsyncCategory from "./AsyncCategory.vue";
import Loading from "./Loading.vue";

const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));

// const AsyncCategory = defineAsyncComponent({
//   loader: () => import("./AsyncCategory.vue"),
//   loadingComponent: Loading,
//   // errorComponent,
//   // 在显示loadingComponent组件之前, 等待多长时间
//   delay: 2000,
//   /**
//    * err: 错误信息,
//    * retry: 函数, 调用retry尝试重新加载
//    * attempts: 记录尝试的次数
//    */
//   onError: function (err, retry, attempts) {},
// });

export default {
  components: { Home, AsyncCategory, AsyncCategory },
};
</script>

<style scoped>
</style>