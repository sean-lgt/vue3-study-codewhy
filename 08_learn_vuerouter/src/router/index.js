import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

// 配置映射关系 --基本配置
// const routes = [{
//     path: '/',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/About',
//     component: About
//   }
// ]

// 配置映射关系 --路由懒加载
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import( /* webpackChunkName: "home-chunk" */ "../pages/Home.vue"),
    meta: {
      name: 'why',
      age: 18,
      height: 1.88
    },
    children: [{
        path: "",
        redirect: "/home/message"
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue")
      },
      {
        path: "shops",
        component: () => import("../pages/HomeShops.vue")
      }
    ]
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('../pages/About.vue')
  },
  {
    path: "/user/:username/id/:id",
    component: () => import("../pages/User.vue")
  },
  {
    path: "/login",
    component: () => import("../pages/Login.vue")
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../pages/NotFound.vue")
  }
]


// 创建一个路由对象router
const router = createRouter({
  routes,
  // history: createWebHashHistory(), // 路由 hash模式
  history: createWebHistory(), // 路由 history模式
})


// 动态添加路由
const categoryRoute = {
  path: "/category",
  component: () => import("../pages/Category.vue")
}

// 添加顶级路由对象
router.addRoute(categoryRoute);

// 添加二级路由对象
router.addRoute("home", {
  path: "/home/moment",
  component: () => import("../pages/HomeMoment.vue")
})



// 导航守卫beforeEach
let counter = 0;
// to: Route对象, 即将跳转到的Route对象
// from: Route对象, 
/**
 * 返回值问题:
 *    1.false: 不进行导航
 *    2.undefined或者不写返回值: 进行默认导航
 *    3.字符串: 路径, 跳转到对应的路径中
 *    4.对象: 类似于 router.push({path: "/login", query: ....})
 */
router.beforeEach((to, from) => {
  console.log(`进行了${++counter}路由跳转`)
  // if (to.path.indexOf("/home") !== -1) {
  //   return "/login"
  // }
  if (to.path !== "/login") {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return "/login"
    }
  }
})



export default router