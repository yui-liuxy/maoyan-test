<template>
  <div class="list">
    <catheader>
      <span slot="text">猫眼电影</span>
      <div slot="right" class="l-right"></div>
    </catheader>
    <catopen>
      <span slot="opentext">发现最新最热电影</span>
    </catopen>
    <ul class="home-nav">
      <li><a>深圳</a></li>
      <li><router-link to="/hotshow">热映</router-link></li>
      <li><router-link to="/cinema">影院</router-link></li>
      <li><router-link to="/reshow">待映</router-link></li>
      <li><router-link to="/classicmovie">经典电影</router-link></li>
      <li><a>搜索</a></li>
    </ul>
    <!-- 子路由的路由出口 -->
    <router-view> </router-view>
  </div>
</template>
<script>
import catheader from "../../components/commer/catheader.vue";
import catopen from "../../components/commer/catopen.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  components: {
    catopen,
    catheader,
  },
};
</script>
<style scoped>
ul li {
  list-style: none;
}
.l-right{
  width: 0.5rem;
  height: 0.5rem;
  background-image: url(//p0.meituan.net/scarlett/f05f61e7a8f3f45fd071c068d7a26870356.png);
  background-repeat: no-repeat;
  background-size: 0.17rem 0.16rem;
  background-position: 0.2rem 0.18rem;
}
.list {
width: 100%;
  height: 100%;

}
.list ul {
  width: 100%;
  border-top:0.01rem solid #eee;
  border-bottom: 0.01rem solid #eee;
  height: .42rem;
  line-height: .42rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  font-size: 0.15rem;
  color: #777;
}
</style>
