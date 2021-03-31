<template>
<div>
  <catheader>
    <div slot="left"><a class="l-left" @click="goback"></a> </div>
    <span slot="text">猫眼电影</span>
    <div slot="right" class="l-right"></div>
  </catheader>
  <login></login>
</div>

</template>

<script>
import Cookies from "js-cookie";
import catheader from "@/components/commer/catheader";
import login from "@/components/main/login";
export default {
name: "Login",
 methods:{

   goback(){
     this.$router.go(-1)
   }
 },
  components:{
    catheader,
    login
  }

}
</script>

<style scoped>
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
</style>
