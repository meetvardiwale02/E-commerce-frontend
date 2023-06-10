import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const removeProductsAPI = async (params) => {
  return await ApiFetchRequest({
    methods: "delete",
    url: `${backeEndUrl}/removeProduct/${params.product_id}`,
  });
};
