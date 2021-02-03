import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String
    favoriteRestaurants: [String]
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]!
  }

  input NewUser {
    email: String!
    password: String!
    firstName: String!
    lastName: String
  }

  type Mutation {
    createUser(input: NewUser!): User!
  }
`