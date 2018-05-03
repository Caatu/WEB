import axios from 'axios'
import store from '../../../vuex/store'

export default {
  
  get_locals({ commit }) {
    var self = this
    axios.get(store.state.url + 'locals/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        window.localStorage.setItem('id')
        window.localStorage.setItem('name')
        window.localStorage.setItem('unit_id')
        store.commit('local_mutation')
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  get_collector({ commit }) {
    var self = this
    axios.get(store.state.url + 'colectors/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (response){
      window.localStorage.setItem('id')
      window.localStorage.setItem('name')
      window.localStorage.setItem('local_id')
      store.commit('collector_mutation')
    })
    .catch(function (error){
      console.log(error)
    })
  },
  get_sensor( {commit} ) {
    var self = this
    axios.get(store.state.url + 'sensors/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (response){
      window.localStorage.setItem('id')
      window.localStorage.setItem('name')
      window.localStorage.setItem('collector_id')
      window.localStorage.setItem('sensor_type')
      store.commit('sensor_mutation')
    })
    .catch(function (error){
      console.log(error)
    })
  },
  get_mensurement( {commit}, id_sensor ) {
    var self = this
    axios.get(store.state.url + 'sensors/' + id_sensor + '/mensurements/', store.state.headers)
    .then(function (response){
      window.localStorage.setItem('id')
      window.localStorage.setItem('sensor')
      window.localStorage.setItem('mensurement_value')
      window.localStorage.setItem('unit_of_measurement')
      window.localStorage.setItem('modified_at')
      store.commit('mensurement_mutation')
    })
    .catch(function (error){
      console.log(error)
    })
  }
}