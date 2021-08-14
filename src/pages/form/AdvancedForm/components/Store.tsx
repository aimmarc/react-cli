import { Card, Form, Input, Row, Col, DatePicker, Select } from "antd";
import React, { forwardRef, useImperativeHandle } from "react";
const { useForm } = Form;

const selectBefore = (
    <Select defaultValue="http://" className="select-before">
        <Select.Option value="http://">http://</Select.Option>
        <Select.Option value="https://">https://</Select.Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com" className="select-after">
        <Select.Option value=".com">.com</Select.Option>
        <Select.Option value=".jp">.jp</Select.Option>
        <Select.Option value=".cn">.cn</Select.Option>
        <Select.Option value=".org">.org</Select.Option>
    </Select>
);

const Store = forwardRef((_, ref): React.ReactElement => {
    const [form] = useForm();
    useImperativeHandle(ref, () => ({
        onSubmit: onsubmit,
        onReset: onreset,
    }));

    const onsubmit = () => {
        return form.validateFields();
    };
    const onreset = () => {
        return form.resetFields();
    };

    return (
        <Card className="mt-12" title="仓库管理" bordered={false}>
            <Form layout="vertical" form={form}>
                <Row gutter={100}>
                    <Col span={8}>
                        <Form.Item
                            label="仓库名"
                            name="title"
                            rules={[{ required: true, message: "请输入标题" }]}
                        >
                            <Input placeholder="为项目起一个名字" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="仓库地址"
                            name="address"
                            rules={[{ required: true, message: "请输入标题" }]}
                        >
                            <Input
                                placeholder="请输入仓库地址"
                                addonAfter={selectAfter}
                                addonBefore={selectBefore}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="仓库管理员"
                            name="administrator"
                            rules={[
                                { required: true, message: "请选择仓库管理员" },
                            ]}
                        >
                            <Select placeholder="请选择仓库管理员">
                                <Select.Option value="sb">杨过</Select.Option>
                                <Select.Option value="xn">小龙女</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="审批人"
                            name="authUser"
                            rules={[
                                { required: true, message: "请选择审批人" },
                            ]}
                        >
                            <Select placeholder="请选择审批人">
                                <Select.Option value="sb">杨过</Select.Option>
                                <Select.Option value="xn">小龙女</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="生效日期"
                            name="dates"
                            rules={[{ required: true, message: "请输入标题" }]}
                        >
                            <DatePicker.RangePicker
                                style={{ width: "100%" }}
                                placeholder={["开始日期", "结束日期"]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="仓库类型"
                            name="type"
                            rules={[{ required: true, message: "请输入标题" }]}
                        >
                            <Input placeholder="为项目起一个名字" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
});

export default Store;
