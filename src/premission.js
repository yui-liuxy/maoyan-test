import router from "./router/index.js";
import Cookies from "js-cookie";
router.beforeEach((to, from, next) => {
    console.log("路由守卫执行")
    if (to.path=="/me"){
        if(Cookies.get('username')){
            next()
        }else{
            next("/login")
        }
    }else {
        next()
    }
})
