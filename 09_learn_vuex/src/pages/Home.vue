<template>
  <div>
    <hr />
    <h2>{{ homeCounter }}</h2>
    <h2>{{ doubleHomeCounter }}</h2>
    <!-- <h2>{{ doubleRootCounter }}</h2> -->
    <button @click="increment">home+1</button>
    <button @click="incrementAction">home+1</button>
    <hr />
  </div>
</template>

<script>
// 模块化使用命名空间，使用辅助函数的三种方式
import {
  createNamespacedHelpers,
  // mapState,
  // mapGetters,
  // mapMutations,
  // mapActions,
} from "vuex";

import { useState, useGetters } from "../hooks/index";

const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers("home");

export default {
  computed: {
    // 1.写法一:
    // ...mapState({
    //   homeCounter: state => state.home.homeCounter
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: "home/doubleHomeCounter"
    // })
    // 2.写法二:
    // ...mapState("home", ["homeCounter"]),
    // ...mapGetters("home", ["doubleHomeCounter"])
    // 3.写法三:
    ...mapState(["homeCounter"]),
    ...mapGetters(["doubleHomeCounter"]),
  },
  methods: {
    // 1.写法一:
    // ...mapMutations({
    //   increment: "home/increment"
    // }),
    // ...mapActions({
    //   incrementAction: "home/incrementAction"
    // }),
    // 2.写法二
    // ...mapMutations("home", ["increment"]),
    // ...mapActions("home", ["incrementAction"]),
    // 3.写法三:
    ...mapMutations(["increment"]),
    ...mapActions(["incrementAction"]),
  },

  setup() {
    // {homeCounter: function}
    // const state = useState(["rootCounter"])
    // const rootGetters = useGetters(["doubleRootCounter"])
    // const getters = useGetters("home", ["doubleHomeCounter"])

    // const mutations = mapMutations(["increment"])
    // const actions = mapActions(["incrementAction"])

    return {
      // ...state,
      // ...getters,
      // ...rootGetters
      // ...mutations,
      // ...actions
    };
  },
};
</script>

<style scoped>
</style>