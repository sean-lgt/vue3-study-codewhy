<template>
  <div>
    <button v-if="counter < 2" v-why.aaaa.bbbb="'coderwhy'" @click="increment">
      当前计数: {{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // 局部指令
  directives: {
    why: {
      created(el, bindings, vnode, preVnode) {
        console.log("why created", el, bindings, vnode, preVnode);
        console.log(bindings.value);
        console.log(bindings.modifiers);
      },
      beforeMount() {
        console.log("why beforeMount");
      },
      mounted() {
        console.log("why mounted");
      },
      beforeUpdate() {
        console.log("why beforeUpdate");
      },
      updated() {
        console.log("why updated");
      },
      beforeUnmount() {
        console.log("why beforeUnmount");
      },
      unmounted() {
        console.log("why unmounted");
      },
    },
  },
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
</style>