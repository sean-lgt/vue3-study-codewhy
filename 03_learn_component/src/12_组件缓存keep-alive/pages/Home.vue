<template>
  <div @click="homeClick">Home组件</div>
  <div>{{ name }}==={{ age }}</div>
</template>

<script>
export default {
  emits: ["componentClick"],
  props: {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  methods: {
    homeClick() {
      this.$emit("componentClick", "home");
    },
  },
};
</script>

<style scoped>
</style>