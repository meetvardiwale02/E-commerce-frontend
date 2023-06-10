import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const fetchCartProductAPI = async () => {
  return await ApiFetchRequest({
    methods: "get",
    url: `${backeEndUrl}/fetchCartProducts`,
  });
};
