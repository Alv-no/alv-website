export const brandsQuery = `brands {
    headingRaw
    buttonText
    buttonLink
    logos {
      alt
      image {
        asset {
          id: _id
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  }`;
