<template>
  <div>
    <!-- 1.默认绑定和事件处理 -->
    <!-- <button @click="btnClick">hyinput按钮</button>
    <h2>HyInput的message: {{modelValue}}</h2> -->

    <!-- 2.通过input -->
    <!-- <input :value="modelValue" @input="btnClick"> -->

    <!-- 3.绑定到props中是不对的 -->
    <!-- <input v-model="modelValue"> -->

    <!-- 4. -->
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>