<template>
  <div>
     <div class="linka">
       <ul>
         <li><a  @click="changeFun">美团账号登录</a></li>
         <li><a @click="changeFu">手机验证登录</a></li>
       </ul>
     </div>
    <div class="mobilelogin"  v-if="change">
      <input name="number" type="text" placeholder="账户名/手机号/Email">
      <input name="password" type="password "  placeholder="请输入密码" >
        <button @click="loginFun">登录</button>
    </div>
     <div class="meituanlogin" v-else>
     <input name="number" type="text">
     <input name="password" type="password">
    <button @click="loginFun">登录</button>
     </div>
  </div>


</template>

<script>
import Cookies from "_js-cookie@2.2.1@js-cookie";

export default {
name: "login",
  data(){
    return{
      change:true
    }
  },
  methods:{
  changeFun(){
    this.change=true
  },
    changeFu(){
      this.change=false
    },
    loginFun(){
      Cookies.set('username',"lili",{expires:60*60})
    },
  }

}
</script>

<style scoped>
.linka{

  width: 100%;
  height: .5rem;
  line-height: .5rem;
}
ul,li{
  list-style: none;
}
.linka ul{
  display: flex;
  justify-content: space-around;


}
.linka ul a{
  font-size: 0.12rem;
}
.mobilelogin{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .2rem;
}
.mobilelogin>input{
  width: 100%;
  padding: .1rem;
  height: 0.3rem;
  border: none;
}
.meituanlogin{
  display: flex;
  flex-direction: column;
}
button{

  border: none;
  background: red;
  color: #fffdef;
  width: 80%;
  height: 0.2rem;
  border-radius: 2px;

}
</style>
