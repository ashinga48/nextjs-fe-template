// Server
import { ApolloProvider } from '@apollo/react-hooks';
  

// Client setup
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { RetryLink } from "apollo-link-retry";


const GRAPHQL_URL = 'http://localhost:4000'

const retrylink = new RetryLink({
    delay: {
      initial: 300
    },
    attempts: {
      max: 3,
      retryIf: (error, _operation) => {
          console.log(' Error on request ', error);
          return !!error
      }
    }
});
const timeoutLink = new ApolloLinkTimeout(10000); // 1 min timeout
const httplink: any = createHttpLink({ uri: GRAPHQL_URL });
const timeoutHttpLink: any = timeoutLink.concat(httplink);
const link = ApolloLink.from([
    retrylink,
    timeoutHttpLink
]);

let apolloClient: any = null;

const createApolloClient = new ApolloClient({
    link,
    ssrMode: typeof window === "undefined",
    // uri: "https://api.spacex.land/graphql/",
    // cache: new InMemoryCache(),
    cache: new InMemoryCache({
        dataIdFromObject: (o:any) => (o._id ? `${o.__typename}:${o._id}`: null),
    })
});

const initializeApollo = () => {
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") {
      return createApolloClient;
    }
  
    // Create the Apollo Client once in the client
    if (!apolloClient) {
      apolloClient = createApolloClient;
    }
  
    return apolloClient;
};

  
// Query
import { gql } from "apollo-boost";
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';

export {
    ApolloProvider,
    // withApollo,
    // client,
    initializeApollo,

    gql,
    useQuery,
    useLazyQuery,
    useMutation, 
}
