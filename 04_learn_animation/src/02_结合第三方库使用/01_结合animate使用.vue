<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <div></div>
    <!-- <transition name="why">
      <h2 class="title" v-if="isShow">lala</h2>
    </transition> -->
    <!-- 自定义class -->
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__flipInY"
    >
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}
.why-enter-active {
  animation: backInUp 0.5s ease-in;
}
.why-leave-active {
  animation: backInUp 0.5s ease-in reverse;
}
</style>