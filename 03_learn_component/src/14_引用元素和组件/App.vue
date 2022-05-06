<template>
  <div>
    <h2 ref="title">哈哈哈哈</h2>
    <button @click="btnClick">获取元素</button>
    <!-- 绑定到一个组件实例上 -->
    <nav-bar ref="navBar"></nav-bar>
  </div>
</template>

<script>
import NavBar from "../14_引用元素和组件/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  methods: {
    btnClick() {
      console.log(this.$refs.title.innerHTML);
      console.log(this.$refs.navBar); //拿到组件实例
      this.$refs.navBar.sayHello(); //调用组件实例方法
      console.log(this.$refs.navBar.$el); //元素
    },
  },
};
</script>

<style scoped>
</style>