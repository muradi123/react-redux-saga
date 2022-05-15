import axios from "axios";

export const requestGetUser = () => {
  return axios.request({
    method: "get",
    url: "http://nodeexpressmongo-env.eba-5kdkufhy.us-east-1.elasticbeanstalk.com/list/getfilms",
  });
};
