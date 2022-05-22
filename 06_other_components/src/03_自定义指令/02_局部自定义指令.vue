<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
export default {
  // 局部指令
  directives: {
    focus: {
      mounted(el, bindings, vnode, preVnode) {
        console.log("focus mounted");
        el.focus();
      },
    },
  },
};
</script>

<style scoped>
</style>