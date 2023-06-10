import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const addToCartAPI = async (data, header) => {
  return await ApiFetchRequest({
    methods: "post",
    url: `${backeEndUrl}/addToCart`,
    body: data,
    header: header,
  });
};
