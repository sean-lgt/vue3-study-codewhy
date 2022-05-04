<template>
  <div>
    <!-- 编译作用域 -->
    <!-- <child-cpn>
      <button>{{ title }}</button>
    </child-cpn> -->

    <!-- 插槽作用域 使用子组件传递的值 -->
    <show-names :names="names">
      <template v-slot:default="slotProp">
        <button>{{ slotProp.item }}--{{ slotProp.index }}</button>
      </template>
    </show-names>

    <show-names :names="names">
      <template v-slot="slotProps">
        <strong>{{ slotProps.item }}-{{ slotProps.index }}</strong>
      </template>
    </show-names>

    <!-- 有且仅有一个插槽时，可以省略template -->
    <!-- 注意: 如果还有其他的具名插槽, 那么默认插槽也必须使用template来编写 -->
    <show-names :names="names" v-slot="coderwhy">
      <button>{{ coderwhy.item }}-{{ coderwhy.index }}</button>
    </show-names>
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";
export default {
  components: {
    ChildCpn,
    ShowNames,
  },
  data() {
    return {
      names: ["why", "kobe", "james", "curry"],
    };
  },
};
</script>

<style scoped>
</style>