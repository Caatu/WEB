
export default {
  url: 'https://api-caatu.herokuapp.com/api/',
  user: {
    username: window.localStorage.getItem('username') || null,
    id: window.localStorage.getItem('id') || null,
    token: window.localStorage.getItem('token') || null
  }
}
