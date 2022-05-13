export const demoMixin = {
  data() {
    return {
      message: 'hello,mixins'
    }
  },
  methods: {
    foo() {
      console.log('🚀【demo mixins foo】', );
    }
  },
  created() {
    console.log('🚀【执行了 mixin 中的create】', );
  },
}