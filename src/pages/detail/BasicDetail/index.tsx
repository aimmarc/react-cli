import { PageWrapper } from "@/components";
import { Descriptions, Divider, Table } from "antd";
import React from "react";

class Detail extends React.PureComponent<{}> {
    render() {
        return (
            <PageWrapper title="基础详情页" bg>
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">
                        Zhou Maomao
                    </Descriptions.Item>
                    <Descriptions.Item label="Telephone">
                        1810000000
                    </Descriptions.Item>
                    <Descriptions.Item label="Live">
                        Hangzhou, Zhejiang
                    </Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,
                        China
                    </Descriptions.Item>
                </Descriptions>
                <Divider />
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">
                        Zhou Maomao
                    </Descriptions.Item>
                    <Descriptions.Item label="Telephone">
                        1810000000
                    </Descriptions.Item>
                    <Descriptions.Item label="Live">
                        Hangzhou, Zhejiang
                    </Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,
                        China
                    </Descriptions.Item>
                </Descriptions>
                <Divider />
                <div className="base-title">退货进度</div>
                <Table dataSource={[]} />
                <Divider />
                <Table />
            </PageWrapper>
        );
    }
}

export default Detail;
