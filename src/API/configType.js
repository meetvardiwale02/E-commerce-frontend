//define the header for thre api
const authToken = localStorage.getItem("authToken");
export const configType = {
  "Content-type": "application/json",
  token: authToken,
};
