const contacts = [
  {
    id: 1,
    firstName: "Manny",
    lastName: "Henri",
  },
  {
    id: 2,
    firstName: "Jasmine",
    lastName: "henri-Rainville",
  },
  {
    id: 3,
    firstName: "Jeremy",
    lastName: "henri-Rainville",
  },
];

export const resolvers = {
  Query: {
    contacts: () => contacts,
  },
  Mutation: {
    addContact: (root, args) => {
      console.log(args);
      // const newId = require("crypto").randomBytes(5).toString("hex");
      const newContact = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
      };
      contacts.push(newContact);
      return newContact;
    },
  },
};
