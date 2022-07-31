<template>
  <div class="overview">
    <custom-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </custom-card>
    <custom-card title="技术栈">
      <custom-text-link :text-arrs="technologyStacks"></custom-text-link>
      <custom-descriptions
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      ></custom-descriptions>
      <custom-descriptions
        class="mt20"
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      ></custom-descriptions>
    </custom-card>
    <custom-card title="项目结构">
      <div class="c-left">
        <custom-code language="bash" :code="projectDir"></custom-code>
      </div>
    </custom-card>
    <custom-card title="项目规范">
      <custom-descriptions
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          {
            name: '文件(.ts .vue .json .d.ts)',
            description: '统一小写, 多个单词使用-分割'
          }
        ]"
      />
      <custom-descriptions
        class="mt20"
        title="编写组件规范"
        :column="1"
        :table-datas="[
          { name: '组件的文件', description: '统一小写, 多个单词使用-分割' },
          {
            name: '组件的目录结构',
            description:
              '例如 button 组件：button/src/index.vue, 统一在button/index.ts导出'
          },
          {
            name: '组件导包顺序',
            description:
              '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数'
          },
          { name: '组件的名称', description: '统一大写开头，驼峰命名' },
          {
            name: '组件属性顺序',
            description: 'name, components, props, emits, setup ...'
          },
          {
            name: 'template标签',
            description: '小写加 - ( 例如：<case-panel/> )'
          },
          {
            name: 'template标签属性顺序',
            description: 'v-if , v-for , ref, class, style, ... ,事件'
          },
          {
            name: '组件的props',
            description: '小写开头，驼峰命名，必须编写类型默认值'
          },
          {
            name: '组件的样式',
            description:
              '作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割'
          }
        ]"
      />
    </custom-card>

    <custom-card title="Git提交规范">
      <custom-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'npm run commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' },
          { name: 'feat', description: '新增特性 (feature)' },
          { name: 'fix', description: '修复 Bug(bug fix) ' },
          { name: 'docs', description: '修改文档 (documentation)' },
          {
            name: 'style',
            description:
              '代码格式修改(white-space, formatting, missing semi colons, etc)'
          },
          { name: 'refactor', description: '代码重构(refactor)' },
          {
            name: 'perf',
            description: '改善性能(A code change that improves performance)'
          },
          { name: 'test', description: '测试(when adding missing tests)' },
          {
            name: 'build',
            description:
              '变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）'
          },
          {
            name: 'ci',
            description:
              '更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等'
          },
          {
            name: 'chore',
            description: '变更构建流程或辅助工具(比如更改测试环境)'
          },
          { name: 'revert', description: '代码回退' }
        ]"
      />
    </custom-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomDescriptions from '@/base-ui/descriptions'
import CustomTextLink from '@/base-ui/text-link'
import CustomCode from '@/base-ui/code'
import CustomCard from '@/base-ui/card'

import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from './config'
export default defineComponent({
  name: 'overview',
  components: {
    CustomDescriptions,
    CustomCard,
    CustomTextLink,
    CustomCode
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    &:deep(.el-card__header span) {
      font-weight: 700;
    }
  }

  .description {
    &:deep(.el-descriptions__title) {
      font-weight: 400;
    }
  }
}
.mt20 {
  margin-top: 20px;
}
</style>
