import { request } from "@tarojs/taro";

const env = process.env.NODE_ENV;

const GET = "GET";
const POST = "POST";

const baseURL = {
  development: "http://localhost:8080",
  production: "https://api.example.com",
};

const getRequest = (url: string, params: any) => {
  return request({
    url: `${baseURL[env]}${url}`,
    method: GET,
    data: params,
  })
};

const postRequest = async <T, U>(url: string, params: U): Promise<ResponseData<T> | null> => {
  const postRes = await request<ResponseData<T>>({
    url: `${baseURL[env]}${url}`,
    method: POST,
    data: params,
  });
  const { statusCode } = postRes;
  if (statusCode === 200) {
    return postRes.data;
  } else {
    return null;
  }
};

export default {
  getRequest,
  postRequest,
};
