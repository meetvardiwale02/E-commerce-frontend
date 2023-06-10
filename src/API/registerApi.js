import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";
import { configType } from "./configType";

export const registerAPI = async (data) => {
  // execution left first creating the backend url

  return await ApiFetchRequest({
    methods: "post",
    url: `${backeEndUrl}/register`,
    body: data,
  });
};
