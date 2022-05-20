<script>
import { h } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  render() {
    return h("div", null, [
      h(HelloWorld, null, {
        default: (props) =>
          h("span", null, `app传入到HelloWorld中的内容: ${props.name}`),
      }),
    ]);
  },
};
</script>

<style scoped>
</style>