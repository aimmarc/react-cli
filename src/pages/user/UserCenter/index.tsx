import { PageWrapper } from "@/components";
import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./components/UserInfo";
import ListInfo from "./components/ListInfo";

const UserCenter: React.FC = (): React.ReactElement => {
    return (
        <PageWrapper custom>
            <Row gutter={8}>
                <Col span={7}>
                    <UserInfo />
                </Col>
                <Col span={17}>
                    <ListInfo />
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default UserCenter;
