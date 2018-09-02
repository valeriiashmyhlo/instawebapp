const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Post {
    id: String,
    name: String,
    location: String,
    logoImg: String,
    mainImg: String,
    comments: [Comment]
  }

  type Comment {
    author: String,
    text: String
  }

  input CommentInput {
    postId: String,
    author: String,
    text: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createComment(input: CommentInput): Comment
  }
`;
