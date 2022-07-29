import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Contact {
    id: ID
    firstName: String!
    lastName: String!
  }

  type Query {
    contacts: [Contact]
  }

  input ContactInput {
    id: ID
    firstName: String!
    lastName: String!
  }

  type Mutation {
    addContact(id: String!, firstName: String!, lastName: String!): Contact
  }
`;

export { typeDefs };
