const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { typeDefs } = require('./backend/graphql/schema');
const { resolvers } = require('./backend/graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.use(bodyParser.json());
server.applyMiddleware({ app });

app.listen({ port: 3001 }, () =>
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`),
);
