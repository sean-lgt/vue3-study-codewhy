<template>
  <div class="user-info">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <!-- <img src="../../../assets/img/avatar.png" /> -->
          <el-avatar size="default" class="avatar" :src="avatarImg"></el-avatar>
          <!-- https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png -->
          <span class="name">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-item icon="CircleClose" @click="handleExitClick">
            退出登录
          </el-dropdown-item>
          <!-- divided 显示分隔符 -->
          <el-dropdown-item icon="InfoFilled" divided
            >用户信息</el-dropdown-item
          >
          <el-dropdown-item icon="Unlock">修改密码</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
    <div class="operation">
      <div class="item">
        <el-icon><Bell /></el-icon>
      </div>
      <div class="item">
        <el-icon><ChatDotRound /></el-icon>
      </div>
      <div class="item">
        <span class="dot"></span>
        <el-icon><Postcard /></el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

import localCache from '@/utils/cache'

import { ElMessageBox } from 'element-plus'
import avatarImg from '@/assets/img/avatar.png'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name) //获取登录姓名

    const router = useRouter()
    // 点击退出登录
    const handleExitClick = () => {
      ElMessageBox.confirm('您确认退出当前登录吗?', '提醒', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localCache.deleteCache('token') //删除缓存中的token
        router.push('/main')
      })
    }

    return {
      name,
      handleExitClick,
      avatarImg
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar {
      width: 30px;
      height: 30px;
    }
    .name {
      margin-left: 8px;
    }
  }
  .operation {
    margin-right: 20px;
    display: flex;
    .item {
      position: relative;
      // display: inline-block;
      width: 40px;
      height: 35px;
      line-height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background: #f2f2f2;
      }

      i {
        font-size: 20px;
      }

      .dot {
        position: absolute;
        top: 3px;
        right: 3px;
        z-index: 10;
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 100%;
      }
    }
  }
}
</style>
