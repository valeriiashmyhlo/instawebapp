const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type User {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }
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
  input CreateUserInput {
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createComment(input: CommentInput): Comment
    createUser(input: CreateUserInput): User
  }
`;
