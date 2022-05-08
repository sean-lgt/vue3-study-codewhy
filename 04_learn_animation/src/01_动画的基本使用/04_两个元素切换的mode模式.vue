<template>
  <div class="test">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <div></div>
    <transition name="why" mode="out-in">
      <h2 class="title" v-if="isShow">Hello world</h2>
      <h2 class="title" v-else="!isShow">你好，coder</h2>
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
/* .why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 2s ease;
} */
</style>

<style scoped>
.test {
  width: 400px;
  margin: 0 auto;
}
.title {
  display: inline-block;
}
.why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
.why-enter-active {
  animation: bounce 1s ease;
}
.why-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>