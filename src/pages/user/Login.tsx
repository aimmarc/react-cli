import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import styles from "./index.less";
import Logo from "./Logo";
import useRequest from "@umijs/use-request";
import { useHistory } from "react-router";
import { userService } from "@/services";
import { getQueryVariable } from "@/utils/common";
import { inject, observer } from "mobx-react";
import { IUserStore } from "@/store/modules/user";
import { IBaseResponse } from "@/utils/api/httpResponse";

interface ILoginProps {
    user: IUserStore;
}

/**
 * 登录
 * @returns
 */
const Login: React.FC<ILoginProps> = (props): React.ReactElement => {
    const history = useHistory();
    const { user } = props;

    const { loading, run } = useRequest(userService.login, {
        manual: true,
        onSuccess: (ret: IBaseResponse) => {
            if (ret.data.code === 0) {
                const redirectUrl = getQueryVariable("redirectUrl");
                user.login({ ...ret.data.data, isLogin: true });
                if (redirectUrl) {
                    location.href = redirectUrl;
                    return;
                }
                history.replace("/");
            } else {
                message.error(ret.data.message);
            }
        },
    });

    const onFinish = (values: any) => {
        console.log("Success:", { data: values });
        run({
            username: values.username,
            password: values.password,
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginPanel}>
                <div className={styles.logoPanel}>
                    <Logo />
                    <p>不以物喜，不以己悲</p>
                </div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input allowClear size="large" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password allowClear size="large" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            loading={loading}
                        >
                            登 录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default inject("user")(observer(Login));
