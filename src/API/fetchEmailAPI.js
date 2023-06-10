import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const fetchEmail = async (data, header) => {
  return await ApiFetchRequest({
   methods : "post",
   url : `${backeEndUrl}/validEmail`,
   body :  data,
   header : header
});
};
