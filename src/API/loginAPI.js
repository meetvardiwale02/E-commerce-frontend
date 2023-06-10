import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const loginAPI = async (data) => {
  // execution left first creating the backend url

  return await ApiFetchRequest({
    methods: "post",
    url: `${backeEndUrl}/login`,
    body: data,
  });
};
