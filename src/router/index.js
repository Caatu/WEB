import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {path: '/login', component: LoginView},
    {path: '/register', component: RegisterView}
  ]
})
