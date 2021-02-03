import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { connect } from "./config/mongoConnect";
connect();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
