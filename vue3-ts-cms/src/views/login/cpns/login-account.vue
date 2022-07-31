<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          show-password
          auto-complete="new-password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { LOCAL_CACHE_KEY } from '@/utils/const'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache(LOCAL_CACHE_KEY.LOGIN_NAME) ?? '',
      password: localCache.getCache(LOCAL_CACHE_KEY.LOGIN_PASSWORD) ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('🚀【校验通过，可以执行登录逻辑】')
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache(LOCAL_CACHE_KEY.LOGIN_INFO, account)
            localCache.setCache(LOCAL_CACHE_KEY.LOGIN_NAME, account.name)
            localCache.setCache(
              LOCAL_CACHE_KEY.LOGIN_PASSWORD,
              account.password
            )
          } else {
            localCache.deleteCache(LOCAL_CACHE_KEY.LOGIN_INFO)
            localCache.deleteCache(LOCAL_CACHE_KEY.LOGIN_NAME)
            localCache.deleteCache(LOCAL_CACHE_KEY.LOGIN_PASSWORD)
          }
          // 2.登录逻辑
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
