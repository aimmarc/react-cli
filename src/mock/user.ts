export const login = (req: any, res: any) => {
  const { password, username } = JSON.parse(req.body);
  if (username === "admin" && password === "88888888") {
    return {
      code: 0,
      message: "成功",
    };
  } else {
    return {
      code: 888,
      message: "用户名或密码错误",
    };
  }
};
