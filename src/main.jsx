import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./data/apollo.js";
import AppProvider from "./Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>
);
