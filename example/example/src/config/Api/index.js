import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_URL = "http://172.16.21.214:3001";

const request = async ({
  method = "GET",
  path = "",
  data = {},
  headers = {},
}) => {
  try {
    const cookie = new Cookies();
    const token = cookie.get("token");

    const res = await axios({
      method: method,
      baseURL: BASE_URL,
      url: path,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });

    return res.data;
  } catch (err) {
    alert(err?.response?.data?.message);
    return null;
  }
};

export default request;
