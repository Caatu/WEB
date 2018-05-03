import store from '@/vuex/store'

import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import DashboardView from '../views/DashboardView'

export default [
  {
    path: '/login', 
    component: LoginView
  },{
    path: '/register', 
    component: RegisterView
  },{
    path: '/dasboard', 
    component: DashboardView
  }
]