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

export const aboutTextQuery = `
  aboutTitle
  aboutTextRaw
  aboutButtonText
  aboutButtonLink
`;

export const sectionsQuery = `
sections {
  ... on Multicol {
    theme
    eyebrow
    title
    bodyRaw
    icons {
      text
      image {
        asset {
          altText
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
  }
  ... on VideoList {
    theme
    title
    description
    list {
      bodyRaw
      video {
        videoMp4 {
          asset {
            url
          }
        }
        videoWebM {
          asset {
            url
          }
        }
      }
    }
  }
  ... on VideoCarousel {
    title
    theme
    description
    list {
      link
      title
      description
      thumbnail {
        asset {
          altText
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
  }
}
`;
