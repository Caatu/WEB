import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  if(window.localStorage.getItem('id') == null && to.path != '/login'){
    next('/login')
  }
  next()
})

export default router
