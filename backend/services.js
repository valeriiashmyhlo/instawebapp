const fetch = require('node-fetch');

const DB_URL = 'http://localhost:3000';

exports.getPosts = () => fetch(`${DB_URL}/posts`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

exports.getPost = (postId) => fetch(`${DB_URL}/posts/${postId}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

exports.putPost = (postId, post) => fetch(`${DB_URL}/posts/${postId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(post)
});

exports.getUsers = () => fetch(`${DB_URL}/users`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

exports.postUser = (user) => fetch(`${DB_URL}/users`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(user)
});
