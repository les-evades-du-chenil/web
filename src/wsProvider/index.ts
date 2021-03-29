import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_URL as string,
  credentials: "include",
});

// const wsLink = process.browser
//   ? new WebSocketLink({
//       uri: process.env.REACT_APP_SERVER_WS_URL as string,
//       options: {
//         reconnect: true,
//       },
//     })
//   : null;
const link = process.browser
  ? split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as any;
        return kind === "OperationDefinition" && operation === "subscription";
      },
      httpLink,
      httpLink
    )
  : httpLink;

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export { apolloClient };
