<template>
  <div>
    <h2>总价值: {{ $store.getters.totalPrice }}</h2>
    <h2>总价值: {{ $store.getters.totalPriceCountGreaterN(1) }}</h2>
    <hr />
    <h2>{{ sNameInfo }}</h2>
    <h2>{{ sAgeInfo }}</h2>
    <!-- <h2>{{ ageInfo }}</h2>
    <h2>{{ heightInfo }}</h2> -->
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["nameInfo", "ageInfo", "heightInfo"]),
    ...mapGetters({
      sNameInfo: "nameInfo",
      sAgeInfo: "ageInfo",
    }),
  },
  setup() {},
};
</script>

<style scoped>
</style>