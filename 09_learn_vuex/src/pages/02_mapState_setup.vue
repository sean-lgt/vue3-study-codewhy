<template>
  <div>
    <h2>Home:{{ $store.state.rootCounter }}</h2>
    <hr />
    <h2>{{ sCounter }}</h2>
    <h2>{{ counter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2>
    <hr />
  </div>
</template>

<script>
import { mapState, useStore } from "vuex";
import { computed } from "vue";
export default {
  computed: {
    fullName() {
      return "Kobe Bryant";
    },
    // 其他计算属性，从state中获取
    ...mapState(["name", "age"]),
  },
  setup() {
    const store = useStore();
    const sCounter = computed(() => store.state.rootCounter);
    // const sName = computed(() => store.state.name);
    // const sAge = computed(() => store.state.age);

    const storeStateFns = mapState(["rootCounter", "name", "age", "height"]);
    // {name: function, age: function, height: function}
    // {name: ref, age: ref, height: ref}

    const storeState = {};
    Object.keys(storeStateFns).forEach((fnKey) => {
      const fn = storeStateFns[fnKey].bind({ $store: store });
      storeStateFns[fnKey] = computed(fn);
    });

    return {
      sCounter,
      ...storeState,
    };
  },
};
</script>

<style scoped>
</style>