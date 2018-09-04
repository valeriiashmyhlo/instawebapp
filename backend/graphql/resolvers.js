const fetch = require('node-fetch');
const { getPosts, getPost, putPost, getUsers, postUser } = require('../services');

const DB_URL = 'http://localhost:3000';

exports.resolvers = {
  Query: {
    posts: async () => {
      const res = await getPosts();
      return await res.json();
    },
  },
  Mutation: {
    createComment: async (_, { input }) => {
      const { postId, author, text } = input;
      const res = await getPost(postId);
      const post = await res.json();
      post.comments.push({ author, text });
      await putPost(postId, post);
      return input;
    },
    createUser: async (_, { input }) => {
      const resUsers = await getUsers();
      const users = await resUsers.json();
      const { firstName, lastName, email, password } = input;
      const resUser = await postUser({ firstName, lastName, email, password });
      const user = await resUser.json();
      delete user.password;
      return user;
    }
  },
};
