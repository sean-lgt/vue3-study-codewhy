<template>
  <div>
    <h2>Home:{{ $store.state.rootCounter }}</h2>
    <h2>Home:{{ sCounter }}</h2>
    <h2>Home:{{ sName }}</h2>
    <h2>Home:{{ age }}</h2>
    <h2>Home:{{ height }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    fullName() {
      return "Kobe Bryant";
    },
    // 其他计算属性，从state中获取
    // ...mapState(["rootCounter", "name", "age", "height"]),
    ...mapState({
      sCounter: (state) => state.rootCounter,
      sName: (state) => state.name,
      age: (state) => state.age,
      height: (state) => state.height,
    }),
  },
};
</script>

<style scoped>
</style>