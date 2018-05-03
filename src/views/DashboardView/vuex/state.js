export default {
  header: {
    headers: {
      'Content-Type': 'application/json'
    }
  },
  local: {
    id: window.localStorage.getItem('id') || null,
    unit_id: window.localStorage.getItem('unit_id') || null,
    name: window.localStorage.getItem('name') || null
  },
  collector: {
    id: window.localStorage.getItem('id') || null,
    local_id: window.localStorage.getItem('local_id') || null,
    name: window.localStorage.getItem('name') || null
  },
  sensor: {
    id: window.localStorage.getItem('id') || null,
    collector_id: window.localStorage.getItem('colector_id') || null,
    name: window.localStorage.getItem('name') || null,
    sensor_type: window.localStorage.getItem('sensor_type') || null
  },
  mensurement: {
    id: window.localStorage.getItem('id') || null,
    sensor: window.localStorage.getItem('sensor') || null,
    mensurement_value: window.localStorage.getItem('measurement_value') || null,
    unit_of_measurement: window.localStorage.getItem('unit_of_measurement') || null,
    modified_at: window.localStorage.getItem('modified_at') || null
  }
}