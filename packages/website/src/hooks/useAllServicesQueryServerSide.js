import { gql } from '@apollo/client';
import { client } from '../server-side/client';

export async function getAllServicesQueryServerSide() {
  const response = await client.query({
    fetchPolicy: 'no-cache',
    query: gql`
      {
        allServices {
          heroDescription
          heroHeading
          id: _id
          slug {
            current
          }
          parentPage {
            slug {
              current
            }
          }
        }
      }
    `,
  });
  return response.data.allServices;
}
