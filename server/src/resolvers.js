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
};
