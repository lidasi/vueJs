<template>
  <div id="app">
    <div class="nav-top">
        <!-- 引入公用的头部 header组件 -->
        <v-header></v-header>
      <keep-alive>
        <router-view class="fadeView"></router-view>
        <!--<router-view></router-view>-->
      </keep-alive>
        <v-foot></v-foot>
    </div>
    <div class="banner">
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
import foot from './components/foot.vue'
export default{
  components: {
    'v-header': header,
    'v-foot': foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-top {
  position: absolute;
  top: 5;
  left: 7%;
  margin-left: -100px;
  z-index: 99;
}
.banner{
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: url("components/banner.jpg");
  background-repeat: no-repeat;
}
</style>
