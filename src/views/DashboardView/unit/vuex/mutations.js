export default {
  unit_mutation() {
    state.unit.id = window.localStorage.getItem('id')
    state.unit.name = window.localStorage.getItem('name')
    state.unit.user_id = window.localStorage.getItem('user_id')
  }
}
