import { gql } from './withApollo';

const GET_POSTS = gql`
query posts{
  posts{
    title
  }
}
`;

export {
  GET_POSTS
}