import axios from "@/utils/request";

export function getAllProjects() {
  return axios({
    url: "/opensource/getAllProjects",
  });
}
