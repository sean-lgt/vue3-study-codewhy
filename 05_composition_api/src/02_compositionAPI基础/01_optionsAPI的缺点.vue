<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>counter*2: {{ counter * 2 }}</h2>
    <button>+1</button>
    <button>-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {},
    decrement() {},
  },
  computed: {
    doubleCounter() {
      return this.counter * 2;
    },
  },
  watch() {},
  created() {},
};
</script>

<style scoped>
</style>