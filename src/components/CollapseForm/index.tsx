import React from "react";
import { Form, Row, Col, Button } from "antd";
import styles from "./index.less";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export interface TCollapseFormProps {
    span?: number;
    extra?: React.ReactElement | string;
    onFinish?: (event: any) => void;
    onReset?: () => void;
    loading?: boolean;
}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

function getFields(
    children: React.ReactElement[],
    span: number,
    expand: boolean
) {
    if (children && children.length > 0) {
        return expand
            ? children.map((child: React.ReactElement, index: number) => (
                  <Col span={span} key={index}>
                      {child}
                  </Col>
              ))
            : children
                  .slice(0, Math.floor(24 / span))
                  .map((child: React.ReactElement, index: number) => (
                      <Col span={span} key={index}>
                          {child}
                      </Col>
                  ));
    } else {
        return children;
    }
}

/**
 *
 * @param props
 * @returns
 */
const CollapseForm: React.FC<TCollapseFormProps> = (
    props
): React.ReactElement => {
    const [form] = Form.useForm();
    const [expand, setExpand]: [boolean, any] = useState(false);
    const span = props.span || 8;
    const children: any = props.children;

    return (
        <Form
            form={form}
            onFinish={props.onFinish}
            {...formItemLayout}
            style={{ marginBottom: 20 }}
            labelAlign="left"
        >
            <Row>{getFields(children, span, expand)}</Row>
            <div className={styles.btnBar}>
                <Button
                    onClick={() => {
                        form.resetFields();
                        props.onReset && props.onReset();
                    }}
                >
                    重置
                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={props.loading}
                >
                    查询
                </Button>
                {props.extra}
                <Button
                    onClick={() => {
                        setExpand(!expand);
                    }}
                    type="link"
                >
                    {expand ? <UpOutlined /> : <DownOutlined />}{" "}
                    {expand ? "收起" : "展开"}
                </Button>
            </div>
        </Form>
    );
};

export default CollapseForm;
