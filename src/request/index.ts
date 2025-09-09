import { request } from "@tarojs/taro";

const env = process.env.NODE_ENV;
console.log("env", env);

const GET = "GET";
const POST = "POST";
const baseURL = {
  development: "http://localhost:8080",
  production: "https://api.example.com",
};

const getRequest = async (url: string, params: any) => {
  return await request({
    url: `${baseURL[env]}${url}`,
    method: GET,
    data: params,
  });
};

const postRequest = async (url: string, params: any) => {
  const postRes = await request({
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
