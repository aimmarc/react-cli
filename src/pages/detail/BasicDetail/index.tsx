import { PageWrapper } from "@/components";
import { Badge, Descriptions, Divider, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";

const data1 = [
    {
        id: "0001",
        goodsCode: "1234561",
        goodsName: "矿泉水 550ml",
        goodsBar: "12421432143214321",
        unitPrice: "2.00",
        sum: 1,
        price: "2.00",
    },
    {
        id: "0002",
        goodsCode: "1234561",
        goodsName: "矿泉水 550ml",
        goodsBar: "12421432143214321",
        unitPrice: "2.00",
        sum: 1,
        price: "2.00",
    },
    {
        id: "0003",
        goodsCode: "1234561",
        goodsName: "矿泉水 550ml",
        goodsBar: "12421432143214321",
        unitPrice: "2.00",
        sum: 1,
        price: "2.00",
    },
    {
        id: "0004",
        goodsCode: "1234561",
        goodsName: "矿泉水 550ml",
        goodsBar: "12421432143214321",
        unitPrice: "2.00",
        sum: 1,
        price: "2.00",
    },
];

const data2 = [
    {
        id: "0001",
        date: "2017-10-01 14:10",
        process: "联系客户",
        status: "进行中",
        operatorId: "取货员 ID1234",
        time: "5 min",
    },
];

class Detail extends React.PureComponent<{}> {
    columns1: ColumnsType<any> = [
        {
            title: "商品编号",
            dataIndex: "goodsCode",
        },
        {
            title: "商品名称",
            dataIndex: "goodsName",
        },
        {
            title: "商品条码",
            dataIndex: "goodsBar",
        },
        {
            title: "单价",
            dataIndex: "unitPrice",
        },
        {
            title: "数量（件）",
            dataIndex: "sum",
        },
        {
            title: "金额",
            dataIndex: "price",
        },
    ];
    columns2: ColumnsType<any> = [
        {
            title: "时间",
            dataIndex: "date",
        },
        {
            title: "当前进度",
            dataIndex: "process",
        },
        {
            title: "状态",
            dataIndex: "status",
            render: (text) => <Badge color="green" text={text}></Badge>,
        },
        {
            title: "操作员ID",
            dataIndex: "operatorId",
        },
        {
            title: "耗时",
            dataIndex: "time",
        },
    ];

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
                <div className="base-title">退货商品</div>
                <Table
                    dataSource={data1}
                    columns={this.columns1}
                    pagination={false}
                    summary={(currentPageData: any) => {
                        const totalNum = currentPageData
                            .map((item: any) => item.sum)
                            .reduce((a: any, b: any) => a + b);
                        const totalPrice = currentPageData
                            .map((item: any) => item.price * 1)
                            .reduce((a: any, b: any) => a + b);

                        return (
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>
                                    总数
                                </Table.Summary.Cell>
                                <Table.Summary.Cell
                                    index={1}
                                ></Table.Summary.Cell>
                                <Table.Summary.Cell
                                    index={2}
                                ></Table.Summary.Cell>
                                <Table.Summary.Cell
                                    index={3}
                                ></Table.Summary.Cell>
                                <Table.Summary.Cell index={4}>
                                    {totalNum}
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={5}>
                                    {totalPrice.toFixed(2)}
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        );
                    }}
                    rowKey="id"
                />
                <div className="base-title mt-24">退货进度</div>
                <Table
                    dataSource={data2}
                    columns={this.columns2}
                    pagination={false}
                    rowKey="id"
                />
            </PageWrapper>
        );
    }
}

export default Detail;
