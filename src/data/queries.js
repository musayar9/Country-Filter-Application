import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      phone
      capital
      native
      emoji
      currency
      languages {
        code
        name
        native
      }
    }
  }
`;
