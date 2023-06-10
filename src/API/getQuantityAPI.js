import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const getQuantityAPI = async () => {
  return await ApiFetchRequest({
    methods: "get",
    url: `${backeEndUrl}/getQuantity`,
  });
};
