<template>
  <div>
    <input v-model="value" />
    <input v-model="why" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    why: {
      set(why) {
        this.$emit("update:title", why);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped>
</style>