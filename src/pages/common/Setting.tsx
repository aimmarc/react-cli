import React from "react";
import { PageWrapper } from "@/components";
import { Col, List, Row, Switch } from "antd";

const data = [
    {
        label: "",
    },
];

const Setting: React.FC = (): React.ReactElement => {
    return (
        <PageWrapper bg fit title="设置" goBack>
            <Row>
                <Col span={12}>
                    <List>
                        <List.Item extra={<Switch />}>多Tab页支持</List.Item>
                        <List.Item extra={<Switch />}>
                            是否展示全屏按钮
                        </List.Item>
                    </List>
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default Setting;
