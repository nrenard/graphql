import { buildSchema } from "graphql";

export default buildSchema(`
  type User {
    id: ID!,
    name: String!,
    email: String!,
  }
  
  type Query {
    users: [User!]!
    user(id: ID): User
  }
  
  type Mutation {
    createUser(name: String!, email: String!): User
  }
`);