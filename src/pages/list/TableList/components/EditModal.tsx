import React from "react";
import { Modal, Form, Input } from "antd";

interface IEditModalProps {
    visible: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}

const EditModal: React.FC<IEditModalProps> = (props): React.ReactElement => {
    const [form] = Form.useForm();

    const handleCancel = () => {
        form.resetFields();
        props.onCancel && props.onCancel();
    };

    const handleOk = () => {
        form.validateFields()
            .then((res) => {
                console.log(res);
                props.onOk && props.onOk();
            })
            .catch(() => {});
    };

    return (
        <Modal
            title="新增规则"
            visible={props.visible}
            onCancel={handleCancel}
            onOk={handleOk}
            maskClosable={false}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    label="规则名称"
                    name="title"
                    rules={[{ required: true, message: "请输入规则名称" }]}
                >
                    <Input placeholder="请输入规则名称" />
                </Form.Item>
                <Form.Item label="规则描述" name="desc">
                    <Input.TextArea rows={4} placeholder="请输入规则描述" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditModal;
