import { gql } from "apollo-server-core";


const typeDefs = gql`
type Contact {
  id: ID!
  firstName: String
  lastName: String
}

type Query{
  contacts: [Contact]
}

`;


export { typeDefs };
