<template>
  <div>
    <nav-bar :name="name">
      <template v-slot:left>
        <button>左边的按钮</button>
      </template>
      <template v-slot:center>
        <h2>我是标题</h2>
      </template>
      <!-- v-slot:name  缩写 #name -->
      <template #right>
        <i>右边的元素</i>
      </template>
      <!-- 指定动态插槽名 -->
      <template #[name]>
        <i>why内容</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      name: "why",
    };
  },
};
</script>

<style scoped>
</style>