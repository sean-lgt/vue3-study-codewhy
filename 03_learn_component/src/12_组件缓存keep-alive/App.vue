<template>
  <div>
    <button
      v-for="(item, index) in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>
    <!-- keep-alive 组件缓存 -->
    <keep-alive include="category">
      <component
        :is="currentTab"
        name="why"
        :age="18"
        @componentClick="componentClick"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Category from "./pages/Category.vue";
export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    componentClick(name) {
      console.log("🚀【app-component】", name);
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>