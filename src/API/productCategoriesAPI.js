import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const productCategoriesAPI = async (params) => {
  return await ApiFetchRequest({
    methods: "get",
    url: `${backeEndUrl}/productCategory/${params.id}`,
  });
};
