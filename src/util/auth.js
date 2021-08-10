const TOKEN = "token";
// 判断有没有登录  （这里大家需要想一下路由导航守卫）
export const isLogined = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};

// 设置token
export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

//获取token
export const getToken = () => {
  return localStorage.getItem("token") || "";
};

// 移除token

export const removeToken = () => {
  localStorage.removeItem("token");
};
