import slugify from 'slugify';

export const createSlugForEmployee = (firstname, lastname) => {
  return slugify(`${firstname} ${lastname}`).toLowerCase();
};
