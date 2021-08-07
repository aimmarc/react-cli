import { Alert, Descriptions, Divider, Form, Input } from "antd";
import React from "react";

const Step2: React.FC = (): React.ReactElement => {
    return (
        <div className="mt-24" style={{ marginBottom: 24 }}>
            <Alert
                message="确认转账后，资金将直接打入对方账户，无法退回。"
                closable
            ></Alert>
            <Descriptions bordered className="mt-24">
                <Descriptions.Item label="付款账户" span={12}>
                    react-cli@alipay.com
                </Descriptions.Item>
                <Descriptions.Item label="收款账户" span={12}>
                    react-cli@alipay.com
                </Descriptions.Item>
                <Descriptions.Item label="收款人姓名" span={12}>
                    aimmarc
                </Descriptions.Item>
                <Descriptions.Item label="转账金额" span={12}>
                    500
                </Descriptions.Item>
            </Descriptions>
            <Divider />
            <Form layout="vertical">
                <Form.Item
                    label="支付密码"
                    rules={[{ required: true }]}
                    name="password"
                >
                    <Input placeholder="请输入" />
                </Form.Item>
            </Form>
        </div>
    );
};

export default Step2;
