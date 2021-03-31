<template>
<div>
     <div id="nav">
      <router-link to="/"><span class="iconfont  icon-dianying "></span> <p>电影/影院</p></router-link>
      <router-link to="/video"><span class="iconfont  icon-shipin1 "></span> <p>视频</p></router-link>
      <router-link to="/minivideo"><span class="iconfont  icon-shipinbofangyingpian "></span> <p>小视频</p></router-link>
      <router-link to="/show"><span class="iconfont  icon-piaoquan "></span> <p>演出</p></router-link>
      <router-link to="/me"><span class="iconfont  icon-wode "></span> <p>我的</p></router-link>
      </div>
    </div>
</template>

<script>
export default {
    name:'catnav',
    data(){
        return{

        }
    },
    methods:{},
    components:{}
}
</script>

<style >
@import url("../../../font/iconfont.css");
#nav span{
  font-size: 0.2rem;
  display: block;
  text-align: center;
  padding-top: 0.08rem;
}

#nav {
  position: fixed;
  bottom: 0;
  height: .5rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 0.5px solid #d8d8d8;
  background-color: #fff;
}
#nav a{
  display: block;
  text-align: center;
}
</style>
