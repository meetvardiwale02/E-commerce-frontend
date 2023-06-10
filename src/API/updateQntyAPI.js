import { backeEndUrl } from "./BackendUrl";
import { ApiFetchRequest } from "./ApiRequest";

export const updateQntyAPI = async (data)=>{
    return await ApiFetchRequest({methods : "post",url: `${backeEndUrl}/updateQnty`,
    body: data,})
}