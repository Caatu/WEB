
export default {
  url: 'http://127.0.0.1:8000/api/',
  user: {
    username: window.localStorage.getItem('username') || null,
    id: window.localStorage.getItem('id') || null,
    token: window.localStorage.getItem('token') || null
  }
}
