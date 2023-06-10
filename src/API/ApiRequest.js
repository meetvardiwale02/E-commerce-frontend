import axios from "axios";
import { configType } from "./configType";

export const ApiFetchRequest = ({ methods, url, body }) => {
  let configuration = {
    method: methods,
    url,
    headers: configType,
    data: body,
  };
  console.log(configuration);
  return axios(configuration)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
