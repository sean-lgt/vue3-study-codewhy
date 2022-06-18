<template>
  <div>
    <h2>Home:{{ $store.state.rootCounter }}</h2>
    <hr />
    <h2>{{ rootCounter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2>
    <h2>{{ sCounter }}</h2>
    <h2>{{ sName }}</h2>
    <hr />
  </div>
</template>

<script>
import { useState } from "../hooks/useState";

export default {
  setup() {
    const storeState = useState(["rootCounter", "name", "age", "height"]);
    const storeState2 = useState({
      sCounter: (state) => state.rootCounter,
      sName: (state) => state.name,
    });

    return {
      ...storeState,
      ...storeState2,
    };
  },
};
</script>

<style scoped>
</style>