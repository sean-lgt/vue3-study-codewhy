<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>home的内容1</li>
      <li>home的内容2</li>
      <li>home的内容3</li>
    </ul>
    <router-view></router-view>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/moment">动态</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>