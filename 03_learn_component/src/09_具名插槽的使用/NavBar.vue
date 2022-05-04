<template>
  <div class="nav-bar">
    <!-- <slot name="default"></slot> -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <!-- 具名动态插槽 -->
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 动态插槽名通过prop传入
  props: {
    name: String,
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}

.left,
.right,
.center {
  height: 44px;
}

.left,
.right,
.addition {
  width: 80px;
  background-color: red;
}

.center {
  flex: 1;
  background-color: blue;
}
</style>