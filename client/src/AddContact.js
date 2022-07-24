import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { contactsListQuery } from "./Contacts";

const CREATE_CONTACT = gql`
  mutation addContact($firstName: String!, $lastName: String!) {
    addContact(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

const AddContacts = (props) => {
  const [addContact, { loading, error }] = useMutation(CREATE_CONTACT);
  const [state, setstate] = useState({ firstName: "", lastName: "" });

  const handleSave = () => {
    const { firstName, lastName } = state;
    addContact({
      variables: { firstName, lastName },
      update: (cache, { data: { addContact } }) => {
        const result = cache.readQuery({ query: contactsListQuery });
        cache.writeQuery({
          query: contactsListQuery,
          data: {
            contacts: [...result.contacts, addContact],
          },
        });
      },
    });
    setstate({ firstName: "", lastName: "" });
  };
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={state.firstName}
        onChange={(e) => setstate({ ...state, firstName: e.target.value })}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={state.lastName}
        onChange={(e) => setstate({ ...state, lastName: e.target.value })}
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default AddContacts;
