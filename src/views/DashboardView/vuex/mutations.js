import axios from 'axios'
import store from '../../../vuex/store'

export default {
  get_units({ commit }) {
    var self = this
    axios.get(store.state.url + 'units/',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        window.localStorage.setItem('id')
        window.localStorage.setItem('name')
        window.localStorage.setItem('user_id')
        store.commit('unit_mutation')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}