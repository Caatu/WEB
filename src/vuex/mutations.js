import state from './state'

export default {
  user_mutation () {
    state.user.username = window.localStorage.getItem('username')
    state.user.id = window.localStorage.getItem('id')
    state.user.token = window.localStorage.getItem('token')
  }
}
