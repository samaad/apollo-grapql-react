import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Contacts from "./Contacts";
import AddContacts from "./AddContact";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="App-header">
          <h2>CRM</h2>
        </div>
        <AddContacts />
        <Contacts />
      </div>
    </ApolloProvider>
  );
}

export default App;
