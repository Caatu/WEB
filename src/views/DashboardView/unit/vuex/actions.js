export default {
  loadUnits({ commit }) {
    axios.get('units/user/' + state.user.id)
      .then(response => {
        commit('SET_UNITS_USER', {list: response.data})
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }
}