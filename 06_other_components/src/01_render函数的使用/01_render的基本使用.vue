
<script>
import { h } from "vue";
export default {
  render() {
    return h("h2", { class: "title" }, "hello render");
  },
};
</script>

<style scoped>
.title {
  color: red;
}
</style>