<template>
  <div class="nav-menu">
    <div class="logo" :class="collapse ? 'flex-center' : ''">
      <img src="~@/assets/img/logo.svg" alt="logo" class="img" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <!-- 需要使用具名插槽样式才不会乱 -->
            <template #title>
              <!-- 使用icon动态加载-->
              <component
                :is="item.ele_icon"
                style="width: 18px; height: 18px; margin-right: 3px"
              ></component>
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <!-- <i v-if="subitem.icon" :class="subitem.icon"></i> -->
                <component
                  v-if="subitem.icon"
                  :is="subitem.ele_icon"
                  style="width: 18px; height: 18px; margin-right: 3px"
                ></component>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <!-- <i v-if="item.icon" :class="item.icon"></i> -->
            <component
              v-if="item.icon"
              :is="item.ele_icon"
              style="width: 18px; height: 18px; margin-right: 3px"
            ></component>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
// 由于vuex中对ts的使用没那么方便，所以自定义hooks来更好的搭配ts
// vuex -> 对 TypeScript 不太友好 --> pinia
import { useStore } from '@/store'

import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    collapse: {
      //是否收起菜单栏
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    // 利用计算属性获取store中的菜单列表信息
    const userMenus = computed(() => store.state.login.userMenus)
    // console.log('🚀【获取到菜单】', userMenus)

    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    const menu = pathMapToMenu(userMenus.value, currentPath)
    let defaultValue = ref(menu.id + '')

    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      userMenus,
      handleMenuItemClick,
      defaultValue
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #0c2135;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .logo.flex-center {
    justify-content: center;
  }
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
