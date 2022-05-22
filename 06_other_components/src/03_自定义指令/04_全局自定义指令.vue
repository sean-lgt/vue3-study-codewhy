<template>
  <h2 v-format-time="'YYYY/MM/DD'">{{ timestamp }}</h2>

  <h2 v-format-time>{{ timestamp }}</h2>
  <h2 v-format-time>{{ timestamp }}</h2>
  <h2 v-format-time>{{ timestamp }}</h2>
  <h2 v-format-time>{{ timestamp }}</h2>
  <h2 v-format-time>{{ timestamp }}</h2>
</template>

<script>
export default {
  setup() {
    const timestamp = 1653200585;

    return {
      timestamp,
    };
  },
  mounted() {
    console.log("app mounted");
  },
};
</script>

<style scoped>
</style>>