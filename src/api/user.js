import {
    post
} from "../util/request";

// 二次封装注册
export const regApi = (user) => post("/api/v1/auth/reg", user);

// 封装登录
export const loginApi = (user) => post("/api/v1/auth/login", user);