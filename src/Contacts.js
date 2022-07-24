import React from "react";
import { gql, useQuery } from "@apollo/client";

export const contactsListQuery = gql`
  query ContactsQuery {
    contacts {
      id
      firstName
      lastName
    }
  }
`;

const Contacts = () => {
  const {
    data: { loading, error, contacts },
  } = useQuery(contactsListQuery);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul>
      {contacts.map((item) => (
        <li key={item.id}>
          {item.firstName} {item.lastName}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
