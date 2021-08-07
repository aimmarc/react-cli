import React from "react";
import { PageWrapper } from "@/components";
import {
    Form,
    Input,
    DatePicker,
    InputNumber,
    Button,
    Radio,
    Mentions,
    Tooltip,
} from "antd";
import { FormInstance } from "antd/lib/form";
import { QuestionCircleOutlined } from "@ant-design/icons";

class BaseForm extends React.PureComponent<{}> {
    state = {
        name: "jack",
    };
    formRef: any = React.createRef<FormInstance>();

    onFinish = (res: any) => {
        console.log(res);
        alert(JSON.stringify(res));
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    render() {
        const customLabel = (
            <div>
                客户
                <span style={{ color: "#999" }}>
                    （选填）
                    <Tooltip placement="top" title="目标的服务对象">
                        <QuestionCircleOutlined />
                    </Tooltip>
                </span>
            </div>
        );

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
                    <Form.Item
                        label="项目目标"
                        name="target"
                        rules={[{ required: true, message: "请输入项目目标" }]}
                    >
                        <Input.TextArea
                            rows={3}
                            placeholder="请输入你的阶段性工作目标"
                        />
                    </Form.Item>
                    <Form.Item
                        label="衡量标准"
                        name="pip"
                        rules={[{ required: true, message: "请输入衡量标准" }]}
                    >
                        <Input.TextArea rows={3} placeholder="请输入衡量标准" />
                    </Form.Item>
                    <Form.Item label={customLabel} name="customer">
                        <Mentions>
                            <Mentions.Option value="afc163">
                                afc163
                            </Mentions.Option>
                            <Mentions.Option value="zombieJ">
                                zombieJ
                            </Mentions.Option>
                            <Mentions.Option value="yesmeck">
                                yesmeck
                            </Mentions.Option>
                        </Mentions>
                    </Form.Item>
                    <Form.Item
                        label={
                            <div>
                                邀评人
                                <span style={{ color: "#999" }}>（选填）</span>
                            </div>
                        }
                        name="comments"
                    >
                        <Mentions>
                            <Mentions.Option value="afc163">
                                afc163
                            </Mentions.Option>
                            <Mentions.Option value="zombieJ">
                                zombieJ
                            </Mentions.Option>
                            <Mentions.Option value="yesmeck">
                                yesmeck
                            </Mentions.Option>
                        </Mentions>
                    </Form.Item>
                    <Form.Item label="权重" name="weight" initialValue={0}>
                        <InputNumber
                            step={1}
                            precision={0}
                            formatter={(value) => `${value}%`}
                            parser={(value: any) => value.replace("%", "")}
                            min={0}
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
