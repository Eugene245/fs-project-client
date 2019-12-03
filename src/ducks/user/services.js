import axios from 'axios'

export function login(credentials) {
  return axios.post('http://localhost:5000/api/users/login', credentials)
}

export function register(credentials) {
  return axios.post('http://localhost:5000/api/users/registration', credentials)
}

export function fetchUser(credentials) {
  return axios.post('http://localhost:5000/api/users/login', credentials)
}
