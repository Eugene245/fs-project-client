import axios from 'axios'

export function login(credentials) {
  return axios.post('http://localhost:5000/api/users/login', credentials)
}

export function auth(token) {
  return axios
    .post('http://localhost:5000/api/users/token', token)
    .then(response => response.data)
}

export function register(credentials) {
  return axios.post('http://localhost:5000/api/users/registration', credentials)
}

export function editProfile(credentials) {
  return axios
    .post('http://localhost:5000/api/users/edit', credentials)
    .then(response => response.data)
}

export function fetchUser(name, offset, limit) {
  return axios
    .get(`http://localhost:5000/api/users/${name}?offset=${offset}&limit=${limit}`)
    .then(response => response.data)
}

export function follow(credentials) {
  return axios
    .post('http://localhost:5000/api/users/following/follow', credentials)
    .then(response => response.data)
}

export function unfollow(credentials) {
  return axios
    .post('http://localhost:5000/api/users/following/unfollow', credentials)
    .then(response => response.data)
}