import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import DashboardView from '../views/DashboardView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {path: '/login', component: LoginView},
    {path: '/register', component: RegisterView},
    {path: '/dasboard', component: DashboardView}
  ]
})
