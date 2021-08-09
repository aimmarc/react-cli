import React from "react";
import { Card, Table } from "antd";
import { ColumnsType } from "_antd@4.16.9@antd/lib/table/interface";

interface IOnlineHotProps {
    data: {
        list?: any[];
        total?: number;
    };
}

const columns: ColumnsType<any> = [
    {
        title: "排名",
        dataIndex: "rank",
    },
    {
        title: "搜索关键词",
        dataIndex: "keyword",
    },
    {
        title: "用户数",
        dataIndex: "userCount",
    },
    {
        title: "周涨幅",
        dataIndex: "weekRate",
    },
];

const OnlineHot: React.FC<IOnlineHotProps> = (props): React.ReactElement => {
    const { data } = props;

    return (
        <Card title="线上热门搜索">
            <Table
                size="small"
                dataSource={data && data.list}
                columns={columns}
                pagination={{ total: data && data.total }}
                rowKey="rank"
            ></Table>
        </Card>
    );
};

export default OnlineHot;
