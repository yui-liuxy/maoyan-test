import Vue from 'vue'
import VueRouter from 'vue-router'
//引入首页的组件
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: "/hotshow" },
  {
    path: '/',
    name: 'Home',
    children:[
        {
        path:'/hotshow',name:"Hotshow",component:()=>import(/* webpackChunkName: "reying" */ '../views/Home/hotshow.vue')
        },
        {path:'/cinema',name:"Cinema",component:()=>
          import(/* webpackChunkName: "reying" */ '../views/Home/cinema.vue')
        },
        { path:'/classicmovie',name:"Classicmovie",component:()=>
          import(/* webpackChunkName: "reying" */ '../views/Home/classicmovie.vue')
        },
        {path:'/reshow',name:"Reshow",component:()=>
          import(/* webpackChunkName: "reying" */ '../views/Home/reshow.vue')
        },

    ],
    component: Home
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: () => import(/* webpackChunkName: "item" */ '../views/Item/index.vue')
  },
  {
    path: '/video',
    name: 'Video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由懒加载，优化性能
    component: () => import('../views/Video/index.vue')
  },
  {
    path: '/minivideo',
    name: 'Minvideo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由懒加载，优化性能
    component: () => import(/* webpackChunkName: "video" */ '../views/Minvideo/index.vue')
  },

  {
    path: '/show',
    name: 'Show',
    component: () => import( '../views/Show/index.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me/index.vue')
  },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "me" */ '../views/Login/index.vue')
    },
    {
        path: '*',
        name: 'page404',
        component: () => import(/* webpackChunkName: "me" */ '../views/Page404/index.vue')
    },
]

const router = new VueRouter({
  routes
})

export default router
