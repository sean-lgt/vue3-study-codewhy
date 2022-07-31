<template>
  <div class="custom-code">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode"></code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import hljs from 'highlight.js' //代码高亮插件
import 'highlight.js/styles/github.css'

export default defineComponent({
  props: {
    language: {
      type: String,
      default: 'html'
    },
    code: {
      type: String,
      dafault: ''
    }
  },
  setup(props) {
    const highlightedCode = ref<string | any>('')

    watchEffect(() => {
      highlightedCode.value = hljs.highlight(props.code as string, {
        language: props.language
      }).value
    })

    return {
      highlightedCode
    }
  }
})
</script>

<style scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
