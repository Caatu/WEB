import axios from 'axios'
import store from './store'

export default {
  register ({commit}, form) {
    console.log(JSON.stringify({
      username: form.username,
      email: form.email,
      password: form.password
    }))
    
    var self = this
    axios.post(store.state.url + 'register', JSON.stringify({
      username: form.username,
      email: form.email,
      password: form.password
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(function (response) {
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('user', response.data.username)
        window.localStorage.setItem('id', response.data.id)
        store.commit('user_mutation')
        self.$router.push('/DashboardView')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
