import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './index.less';
import Logo from './Logo';
import { useLogin } from '@/domain/model/user';
import useTheme from '@/utils/hooks/useTheme';

/**
 * 登录
 * @returns
 */
const Login: React.FC = (): React.ReactElement => {
    const { loading, run } = useLogin();
    const { color } = useTheme('#f0f2f5');
    const { color: bgColor } = useTheme('#000', '#fff');

    return (
        <div className={styles.login} style={{ backgroundColor: color }}>
            <div className={styles.loginPanel}>
                <div className={styles.logoPanel}>
                    <Logo />
                    <p
                        style={{
                            color: bgColor,
                        }}
                    >
                        不以物喜，不以己悲
                    </p>
                </div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={run}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名',
                            },
                        ]}
                    >
                        <Input
                            placeholder="请输入用户名"
                            allowClear
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="请输入密码"
                            allowClear
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
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

export default Login;
