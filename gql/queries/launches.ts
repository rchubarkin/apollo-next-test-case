import { graphql } from "@/gql/.generated";
import { LaunchesQuery } from "@/gql/.generated/graphql";

export const launchesQuery = graphql(`
  query Launches($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_unix
      details
      links {
        presskit
      }
      rocket {
        rocket_name
        rocket {
          wikipedia
          stages
          first_flight
          active
          engines {
            layout
            number
          }
        }
      }
    }
  }
`);

export type Launch = NonNullable<
  NonNullable<LaunchesQuery["launches"]>[number]
>;
