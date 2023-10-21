<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <router-view></router-view>
    首页
    <van-tabbar>
      <van-tabbar-item to="/LayoutView" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/MaxView" icon="orders-o">健康百科</van-tabbar-item>
      <van-tabbar-item to="/CollectView" icon="comment-circle-o"
        >信息中心</van-tabbar-item
      >
      <van-tabbar-item to="/HomeView" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutView',
  components: { // 引入组件
  },
  data () {
    return {
    }
  },
  watch: {},
  created () { },
  methods: {},
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang=''>
</style>
