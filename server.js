const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const actions = require('./actions');

const POSTS = [
  {
    id: '5',
    name: 'Nina',
    location: 'Kiyv',
    logoImg: 'https://scontent-frt3-2.cdninstagram.com/vp/257ba28fee0309abb07b6196bd5bb198/5C0CF96B/t51.2885-19/s150x150/30841686_1860612094237314_8456555885861273600_n.jpg',
    mainImg: 'https://scontent-frt3-2.cdninstagram.com/vp/48d436f275e0bacf15b235ac6fd2cae0/5BF6F431/t51.2885-15/sh0.08/e35/p640x640/37771799_430459137361862_3462448775421755392_n.jpg',
    comments: [
      {
        author: 'Kate',
        text: 'Nice pic!'
      },
      {
        author: 'Jim',
        text: 'Lol!'
      }
    ]
  },
  {
    id: '2',
    name: 'Nina',
    location: 'Kiyv',
    logoImg: 'https://scontent-frt3-2.cdninstagram.com/vp/257ba28fee0309abb07b6196bd5bb198/5C0CF96B/t51.2885-19/s150x150/30841686_1860612094237314_8456555885861273600_n.jpg',
    mainImg: 'https://scontent-frt3-2.cdninstagram.com/vp/48d436f275e0bacf15b235ac6fd2cae0/5BF6F431/t51.2885-15/sh0.08/e35/p640x640/37771799_430459137361862_3462448775421755392_n.jpg',
    comments: [
      {
        author: 'Kate',
        text: 'Nice pic!'
      },
      {
        author: 'Jim',
        text: 'Lol!'
      }
    ]
  },
]

const typeDefs = gql`
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

const resolvers = {
  Query: {
    posts: () => POSTS,
  },
  Mutation: {
    createComment: (_, { input }) => ({
      author: input.author,
      text: input.text
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.use(bodyParser.json());
server.applyMiddleware({ app });

app.listen({ port: 3001 }, () =>
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`),
);
