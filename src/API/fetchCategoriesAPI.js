import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const fetchCategoiresAPI = async (header) => {
  return await ApiFetchRequest({
    methods: "get",
    url: `${backeEndUrl}/fetchCategories`,
    header: header,
  });
};
