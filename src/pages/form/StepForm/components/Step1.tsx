import { Form, Input, InputNumber, Select } from "antd";
import React from "react";

const Step1: React.FC = (): React.ReactElement => {
    return (
        <Form layout="vertical" className="mt-24">
            <Form.Item
                label="付款账户"
                name="title"
                rules={[{ required: true, message: "请输入标题" }]}
            >
                <Select placeholder="为项目起一个名字" allowClear>
                    <Select.Option value="react-cli@alipay.com">
                        react-cli@alipay.com
                    </Select.Option>
                </Select>
            </Form.Item>

            <div className="ant-pro-form-group">
                <div className="ant-pro-form-group-title">收款账户</div>
                <div
                    className="ant-space ant-space-horizontal ant-space-align-center ant-pro-form-group-container"
                    style={{ gap: "8px" }}
                >
                    <Form.Item
                        name="dates"
                        rules={[{ required: true, message: "请选择日期" }]}
                    >
                        <Select placeholder="请选择">
                            <Select.Option value="alipay">支付宝</Select.Option>
                            <Select.Option value="bankCard">
                                银行卡
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="dates"
                        rules={[{ required: true, message: "请输入" }]}
                    >
                        <Input placeholder="请输入" />
                    </Form.Item>
                </div>
            </div>
            <Form.Item
                label="收款人姓名"
                name="target"
                rules={[{ required: true, message: "请输入收款人姓名" }]}
            >
                <Input placeholder="请输入" allowClear />
            </Form.Item>
            <Form.Item
                label="转账金额"
                name="money"
                rules={[{ required: true, message: "请输入转账金额" }]}
            >
                <InputNumber
                    placeholder="请输入"
                    min={0.01}
                    precision={2}
                    style={{ width: "100%" }}
                />
            </Form.Item>
        </Form>
    );
};

export default Step1;
