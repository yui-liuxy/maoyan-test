<template>
  <div>
   <catheader>
     <div slot="left"><a class="l-left" @click="goback"></a> </div>
     <span slot="text">{{ itemObj.nm }}</span>
     <div slot="right" class="l-right"></div>
   </catheader>
    <catopen>
      <span slot="opentext">19.9元起购票</span>
    </catopen>
    <div  class="i-content" >
    <div class="poster-bg"  :style="{background:'url('+itemObj.img2+' )'}">  </div>
      <div class="i-left" ><img v-if="itemObj !== undefined" :src="itemObj.img" /></div>
      <div  class="i-right">
        <h2 class="title">{{ itemObj.nm }}</h2>
        <p class="title-em">{{ itemObj.enm }}</p>
        <div class="sc">{{ itemObj.sc }}.0 ( {{itemObj.snum}} 人评分)</div>
        <p>{{ itemObj.cat }} {{ itemObj.version }}</p>
        <p>{{ itemObj.src }}/{{ itemObj.dur }}分钟</p>
        <p>{{ itemObj.pubDesc }}</p>
      </div>
    </div>
    </div>

</template>
<script>
import axios from "axios";
import Catheader from "@/components/commer/catheader";
import catopen from "@/components/commer/catopen";
export default {
  name: "Item",
  data() {
    return {
      itemObj: {},
    };
  },
  async mounted() {
    console.log(this.$route.params.id);
    var id = this.$route.params.id;
    var res = await axios.get(
      "ajax/detailmovie?movieId=" +
        id +
        "&optimus_uuid=D40533108E3A11EB8BB437CBCBB9CA3333CFD43D6D314F6F849B7EFC0AD07620&optimus_risk_level=71&optimus_code=10"
    );

    this.itemObj = res.data.detailMovie;
    this.itemObj.img = res.data.detailMovie.img.replace("w.h", "110.150");
    this.itemObj.img2 = res.data.detailMovie.img.replace("w.h", "1000.150");
    console.log(this.itemObj )
  },
  methods: {
     goback(){
       this.$router.go(-1)
     }
  },
  components: {
    Catheader,
    catopen
  },
};
</script>
<style scoped>
.l-right{
  z-index: 10;
  width: 0.5rem;
  height: 0.5rem;
  background-image: url(//p0.meituan.net/scarlett/f05f61e7a8f3f45fd071c068d7a26870356.png);
  background-repeat: no-repeat;
  background-size: 0.17rem 0.16rem;
  background-position: 0.2rem 0.18rem;
}
.l-left{
  z-index: 10;
  margin-top: .15rem;
  margin-left: .1rem;
  color: #b0afaf;
  border: 2px solid #dadada;
  display: block;
  width: .15rem;
  height: .15rem;
  z-index: 99;
  transform: rotate(-225deg);
  border-top: none;
  border-left: none;
}
.i-content{
  display: flex;
  padding-left: 0.1rem;
   width: 100%;
  height: 1.9rem;


}
.poster-bg {
  width: 100%;
  height: 1.9rem;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  -webkit-filter: blur(1.2rem);
  filter: blur(1.2rem);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .55;
}
.i-content .i-right{
  padding-left:.1rem;
}
.title{
  font-size: .2rem;
  margin-top: 0.02rem;
  font-weight: 700;
  overflow: hidden;
}
.title-em{

  font-size: .12rem;
  /*color: #fff;*/
  opacity: .8;
}
.sc{
  font-size: 18px;
  font-weight: 700;
  color: #fc0;
  margin-top: 11px;
}
p{

  font-size: .12rem;

}
</style>
