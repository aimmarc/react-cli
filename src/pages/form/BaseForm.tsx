import React from "react";
import { PageWrapper } from "@/components";
import { Form, Input, DatePicker, InputNumber, Button, Radio } from "antd";
import { FormInstance } from "antd/lib/form";

class BaseForm extends React.PureComponent<{}> {
    state = {
        name: "jack",
    };
    formRef: any = React.createRef<FormInstance>();

    onFinish = (res: any) => {
        console.log(res);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    render() {
        return (
            <PageWrapper title="基础表单" bg fit>
                <Form
                    layout="vertical"
                    style={{ padding: "0 20%" }}
                    onFinish={this.onFinish}
                    ref={this.formRef}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: "请输入标题" }]}
                    >
                        <Input placeholder="为项目起一个名字" />
                    </Form.Item>
                    <Form.Item
                        label="起止日期"
                        name="dates"
                        rules={[{ required: true, message: "请选择日期" }]}
                    >
                        <DatePicker.RangePicker />
                    </Form.Item>
                    <Form.Item label="项目目标" name="target">
                        <Input.TextArea
                            rows={3}
                            placeholder="请输入你的阶段性工作目标"
                        />
                    </Form.Item>
                    <Form.Item label="衡量标准" name="pip">
                        <Input.TextArea rows={3} placeholder="请输入衡量标准" />
                    </Form.Item>
                    <Form.Item label="权重" name="weight" initialValue={0}>
                        <InputNumber
                            step={1}
                            precision={0}
                            formatter={(value) => `${value}%`}
                            parser={(value: any) => value.replace("%", "")}
                        />
                    </Form.Item>
                    <Form.Item label="目标公开" name="public">
                        <Radio.Group>
                            <Radio value={1}>公开</Radio>
                            <Radio value={2}>部分公开</Radio>
                            <Radio value={3}>不公开</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        <Button
                            style={{ marginLeft: 10 }}
                            onClick={this.onReset}
                        >
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </PageWrapper>
        );
    }
}

export default BaseForm;
