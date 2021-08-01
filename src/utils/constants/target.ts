const domain: any = {
  development: "/api",
  production: "",
};
const env: any = process.env.NODE_ENV;
const target: string = domain[env];

export default target;
