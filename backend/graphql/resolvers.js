const fetch = require('node-fetch');
const { getPosts, getPost, putPost } = require('../services');

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
      
      console.log(input);
      await putPost(postId, post);
      return input;
    }
  },
};
