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

  type Comment {
    user: ID!
    text: String!
  }

  enum FoodType {
    PIZZA
    FASTFOOD
    SUSHI
    HEALTHY
    LAMEN
    GREEK
    ASIATIC
    BRAZILIAN
    MEXICAN
    ITALIAN
    DESSERT
    BAKERY
    BRUNCH
    COFFEE
  }

  type Restaurant {
    id: ID!
    name: String!
    type: [FoodType!]!
    score: Float
    photos: [String]!
    comments: [Comment]!
    city: String!
  }
  
  type Query {
    getUser(id: ID!): User
    getUsers: [User]!
    getRestaurant(id: ID!): Restaurant
    getRestaurants: [Restaurant]!
  }

  input NewUser {
    email: String!
    password: String!
    firstName: String!
    lastName: String
  }

  input NewRestaurant {
    name: String!
    photos: [String]
    type: [String!]!
    city: String!
  }

  type Mutation {
    createUser(input: NewUser!): User!
    createRestaurant(input: NewRestaurant!): Restaurant!
  }
`