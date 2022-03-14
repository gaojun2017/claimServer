import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/cliamProgress.vue'),
    meta:{
      chinaName:'首页'
    }
  },
  {
    path: '/cliamProgress',
    component: () => import('../components/cliamProgress.vue'),
    meta:{
      chinaName:'首页'
    }
  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.chinaName;
  next();
})

router.afterEach(() => {
  window.scroll(0,0);
})


export default router;