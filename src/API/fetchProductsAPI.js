import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const fetchProductsAPI = async (header) => {
  return await ApiFetchRequest({
    methods: "get",
    url: `${backeEndUrl}/viewProducts`,
    header: header,
  });
};
