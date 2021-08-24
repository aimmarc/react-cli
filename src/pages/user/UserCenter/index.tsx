import { PageWrapper } from "@/components";
import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./components/UserInfo";
import ListInfo from "./components/ListInfo";

const UserCenter: React.FC = (): React.ReactElement => {
    return (
        <PageWrapper custom>
            <Row gutter={8}>
                <Col style={{ width: 400 }}>
                    <UserInfo />
                </Col>
                <Col flex={1}>
                    <ListInfo />
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default UserCenter;
