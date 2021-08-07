import { Card, Form, Input, Row, Col, DatePicker, Select } from "antd";
import React, { forwardRef } from "react";
import { useImperativeHandle } from "react";
const { useForm } = Form;

const Premission = forwardRef((_, ref): React.ReactElement => {
    const [form] = useForm();
    useImperativeHandle(ref, () => ({
        onSubmit: onsubmit,
        onReset: onreset,
    }));

    /**
     * 提交
     * @returns
     */
    const onsubmit = () => {
        return form.validateFields();
    };

    const onreset = () => {
        return form.resetFields();
    };

    return (
        <Card className="mt-12" title="任务管理">
            <Form layout="vertical" form={form}>
                <Row gutter={100}>
                    <Col span={8}>
                        <Form.Item
                            label="任务名"
                            name="title"
                            rules={[
                                { required: true, message: "请输入任务名" },
                            ]}
                        >
                            <Input placeholder="请输入任务名" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="任务描述"
                            name="address"
                            rules={[
                                { required: true, message: "请输入任务描述" },
                            ]}
                        >
                            <Input placeholder="请输入任务描述" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="执行人"
                            name="administrator"
                            rules={[
                                { required: true, message: "请选择执行人" },
                            ]}
                        >
                            <Select placeholder="请选择执行人">
                                <Select.Option value="sb">杨过</Select.Option>
                                <Select.Option value="xn">小龙女</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="责任人"
                            name="authUser"
                            rules={[
                                { required: true, message: "请选择责任人" },
                            ]}
                        >
                            <Select placeholder="请选择责任人">
                                <Select.Option value="sb">杨过</Select.Option>
                                <Select.Option value="xn">小龙女</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="生效日期"
                            name="dates"
                            rules={[
                                { required: true, message: "请选择生效日期" },
                            ]}
                        >
                            <DatePicker.RangePicker
                                style={{ width: "100%" }}
                                placeholder={["开始日期", "结束日期"]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="任务类型"
                            name="type"
                            rules={[
                                { required: true, message: "请选择任务类型" },
                            ]}
                        >
                            <Select placeholder="请选择任务类型">
                                <Select.Option value="sb">私密</Select.Option>
                                <Select.Option value="xn">公开</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
});

export default Premission;
