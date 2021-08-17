import App from "./modules/app";
import User from "./modules/user";

const app = new App();
const user = new User();

export default {
    app,
    user,
};

export { app, user };
