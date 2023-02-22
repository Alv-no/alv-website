/* eslint-disable no-console */
import imageUrlBuilder from "@sanity/image-url";
import { window } from "browser-monads";
import fetch from "node-fetch";
import { useState } from "react";

export const urlBuilder = (source, config) =>
  imageUrlBuilder({
    projectId: config.SANITY_PROJECT_ID,
    dataset: config.SANITY_DATASET,
  }).image(source);

export const getFilePath = (config) =>
  `https://cdn.sanity.io/files/${config.SANITY_PROJECT_ID}/${config.SANITY_DATASET}/`;

export const handleEmailSubmit = async (productName, email) => {
  const mailApiUrl = `${window.location.protocol}//mail-api.${window.location.hostname}/send`;

  const formData = new FormData();

  formData.append("subject", "Email from website");
  email && formData.append("email", email);
  productName && formData.append("productName", productName);

  const response = await fetch(mailApiUrl, {
    method: "POST",
    body: formData,
  }).catch((error) => {
    console.error(error);
  });

  return response;
};

export const fileUrl = (_ref, config) => {
  const baseUrl = "https://cdn.sanity.io/files";
  const ref = _ref.split("-");
  const asset = ref[1];
  const extension = `${ref[2]}`;

  return `${baseUrl}/${config.SANITY_PROJECT_ID}/${config.SANITY_DATASET}/${asset}.${extension}`;
};

export const createFormData = (inputValues) => {
  const formData = new FormData();

  Object.keys(inputValues).forEach((key) => {
    formData.append(key, inputValues[key]);
  });

  return formData;
};

export const submitWithDelay = async (apiUrl, body) => {
  fetch(apiUrl, {
    method: "POST",
    body,
  })
    .then(() => {
      setTimeout(() => {
        return "success";
      }, 400);
    })
    .catch(() => {
      setTimeout(() => {
        return "error";
      }, 400);
    });
};

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
