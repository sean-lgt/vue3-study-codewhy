<template>
  <div>
    <my-slot-cpn>
      <div>我是插槽的内容</div>
      <!-- <div>我是插槽的内容</div> -->
      <!-- <div>我是插槽的内容</div> -->
    </my-slot-cpn>
    <my-slot-cpn>
      <div>组件插槽嵌套：<my-button></my-button></div>
    </my-slot-cpn>
    <my-slot-cpn></my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MySlotCpn,
    MyButton,
  },
};
</script>

<style scoped>
</style>