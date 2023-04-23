import axios from "@/utils/request";

export function getUser() {
  return axios({
    url: "/user",
    method: "get",
    params: {
      id: "63ad2586b9410d7b61a65764",
    },
  });
}
