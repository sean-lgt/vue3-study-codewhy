<template>
  <!-- <div id="app">
    <h2>头部</h2>
    <router-view></router-view>
    <h3>底部</h3>
    <router-link to="/home">首页</router-link>
    <router-link to="/about" active-class="coder-why-active">关于</router-link>
    <router-view></router-view>
  </div> -->
  <div id="app">
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">{{ props.href }}</button>
      <button @click="props.navigate">哈哈哈</button>
      <span :class="{ active: props.isActive }">{{ props.isActive }}</span>
      <span :class="{ active: props.isActive }">{{ props.isExactActive }}</span>
      <!-- <p>{{props.route}}</p> -->
    </router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/kobe/id/111">用户</router-link>
    <router-link to="/category">分类</router-link>

    <button @click="jumpToAbout">关于</button>
    <button @click="forwardOneStep">前进一步</button>

    <router-view v-slot="props">
      <!-- <transition name="why"> -->
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  methods: {
    // jumpToAbout() {
    //   // router
    //   this.$router.push("/about")
    // }
  },
  setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      // router.push("/about")
      router.push({
        path: "/about",
        query: {
          name: "why",
          age: 18,
        },
      });
      // router.replace("/about")
    };

    const forwardOneStep = () => {
      // router.go(1);
      router.go(-1);
      // router.forward()
      // router.back()
    };

    return {
      jumpToAbout,
      forwardOneStep,
    };
  },
};
</script>

<style>
.why-active {
  color: red;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
