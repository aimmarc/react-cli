import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import styles from "./index.less";
import Logo from "./Logo";
import useRequest from "@umijs/use-request";
import { useHistory } from "react-router";
import { userService } from "@/services";
import { getQueryVariable } from "@/utils/common";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/**
 * 登录
 * @returns
 */
const Login: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const { loading, run } = useRequest(userService.login, {
    manual: true,
    onSuccess: (ret) => {
      if (ret.data.code === 0) {
        const redirectUrl = getQueryVariable('redirectUrl');
        
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input allowClear size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
