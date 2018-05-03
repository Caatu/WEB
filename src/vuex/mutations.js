export default {
  user_mutation (state) {
    state.user.username = window.localStorage.getItem('username')
    state.user.id = window.localStorage.getItem('id')
    state.user.token = window.localStorage.getItem('token')
  },
  local_mutation (state) {
    state.local.id = window.localStorage.getItem('id_local')
    state.local.name = window.localStorage.getItem('name')
    state.local.unit_id = window.localStorage.getItem('unit_id')
  },
  collector_mutation (state) {
    state.collector.id = window.localStorage.getItem('id_collector')
    state.collector.name = window.localStorage.getItem('name')
    state.collector.local_id = window.localStorage.getItem('local_id')
  },
  sensor_mutation (state) {
    state.sensor.id = window.localStorage.getItem('id_sensor')
    state.sensor.name = window.localStorage.getItem('name')
    state.sensor.collector_id = window.localStorage.getItem('collector_id')
    state.sensor.sensor_type = window.localStorage.getItem('sensor_type')
  },
  mensurement_mutation (state) {
    state.mensurement.id = window.localStorage.getItem('id_mensurement')
    state.mensurement.sensor = window.localStorage.getItem('sensor')
    state.mensurement.mensurement_value = window.localStorage.getItem('mensurement_value')
    state.mensurement.unit_of_measurement = window.localStorage.getItem('unit_of_measurement')
    state.mensurement.modified_at = window.localStorage.getItem('modified_at')
  }
}
