import React from "react";
import { EmployeeBio } from "./index";

export default {
  title: "components/employeeBio",
};

export const Default = (data) => <EmployeeBio {...data} />;
Default.args = {
  id: "123",
  firstname: "Marcus Sahlin",
  lastname: "Pettersen",
  title: "Daglig leder og Prosjektleder",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Laboris nisi ut aliquip ex ea commodo consequat.",
  videoLink: "https://player.vimeo.com/video/76979871",
  pdfLink: "http://www.africau.edu/images/default/sample.pdf",
};
