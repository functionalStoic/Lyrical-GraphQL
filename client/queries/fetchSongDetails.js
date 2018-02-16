import gql from 'graphql-tag';

export default gql`
  query GetSongDetails($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
