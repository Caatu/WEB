import store from '@/vuex/store'

import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import DashboardView from '../views/DashboardView'
import mainlayout from '../layout/mainlayout'

export default [
  {
    path: '/',
      component: mainlayout,
      children: [
        { path: '/dasboard', 
          component: DashboardView }
      ]
    },
    {
      path: '/login', 
      component: LoginView
    },{
      path: '/register', 
      component: RegisterView
    }
]