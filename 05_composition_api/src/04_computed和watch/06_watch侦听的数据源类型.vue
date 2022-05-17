<template>
  <div>
    <h2>{{ info.name }}</h2>
    <button @click="changeDate">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  setup() {
    const info = reactive({
      name: "why",
      age: 18,
    });
    // 1.侦听watch时，传入一个getter函数
    watch(
      () => info.name,
      (newVal, oldVal) => {
        console.log(`newVal:${newVal};oldVal:${oldVal}`);
      }
    );

    // 2.传入一个可响应式对象，reactive对象/ref对象
    //     -- 情况一 reactive对象获取到的newValue和oldValue本身都是reactive对象
    watch(info, (newVal, oldVal) => {
      console.log(`newVal:${newVal};oldVal:${oldVal}`);
    });
    //     -- 如果希望newVal和oldVal是一个普通对象
    watch(
      () => {
        return { ...info };
      },
      (newVal, oldVal) => {
        console.log(`newVal:${newVal};oldVal:${oldVal}`);
      }
    );
    //   -- 情况二 ref对象获取newValue和oldValue是value值的本身
    // const name = ref("why");
    // watch(name, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue:", oldValue);
    // })

    const changeDate = () => {
      info.name = "haha";
    };

    return {
      info,
      changeDate,
    };
  },
};
</script>

<style scoped>
</style>