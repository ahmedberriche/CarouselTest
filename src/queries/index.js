import { gql } from "@apollo/client";

export const Get_Images = gql`
  query GetImages {
    image {
      id
      url
      alt
    }
  }
`;
