import "@testing-library/jest-dom/extend-expect";
import { createSlugForEmployee } from ".";

const firstname = "Ma=Ts# Gundersen";
const lastname = "Fra]]nsPlass#?";

test("names get slugified", () => {
  expect(createSlugForEmployee(firstname, lastname)).toBe(
    "mats-gundersen-fransplass",
  );
});
