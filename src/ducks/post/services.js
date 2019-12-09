import axios from 'axios'

export function fetchPosts(limit, offset) {
  return axios
    .get(`http://localhost:5000/api/posts?offset=${offset}&limit=${limit}`)
    .then(response => response.data)
}

export function fetchPostById(id) {
  return axios
    .get(`http://localhost:5000/api/posts/${id}`)
    .then(response => response.data)
}

export function sendPost(credentials) {
  return axios.post('http://localhost:5000/api/posts/add', credentials)
}

export function sendComment(credentials) {
  return axios.post('http://localhost:5000/api/posts/new-comment', credentials)
}

export function like(credentials) {
  return axios
    .post('http://localhost:5000/api/posts/likes/like', credentials)
    .then(response => response.data)
}

export function unlike(credentials) {
  return axios
    .post('http://localhost:5000/api/posts/likes/unlike', credentials)
    .then(response => response.data)
}