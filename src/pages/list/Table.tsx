import React, { useEffect } from "react";
import { PageWrapper } from "@/components";
import { Input, Form, DatePicker, Button, Table } from "antd";
import { CollapseForm } from "@/components";
import { injectModel } from "@/models";

const FormItem = Form.Item;

class TableList extends React.PureComponent<{}> {
    columns = [
        {
            title: "规则名称",
            dataIndex: "title",
        },
        {
            title: "描述",
            dataIndex: "title",
        },
        {
            title: "服务调用次数",
            dataIndex: "title",
        },
        {
            title: "状态",
            dataIndex: "title",
        },
        {
            title: "上次调度时间",
            dataIndex: "title",
        },
        {
            title: "操作",
        },
    ];
    state = {
        tableData: {
            total: 0,
            list: [],
        },
        loading: false,
    };
    queryParams = {
        page: 1,
        pageSize: 10,
    };

    componentDidMount() {
        this.getTableData();
    }

    /**
     * 获取数据
     */
    getTableData = async () => {
        this.setState({
            loading: true,
        });
        const { data, code } = await injectModel.listService
            .table(this.queryParams)
            .catch(() => this.setState({ loading: false }));
        if (code === 0) {
            this.setState({
                tableData: data,
            });
        }
        this.setState({ loading: false });
    };

    /**
     * 搜索
     * @param res
     */
    search = (res: object) => {
        this.queryParams = {
            ...this.queryParams,
            ...res,
        };
        this.getTableData();
    };

    /**
     * 页码改变
     * @param current
     */
    onPageChange = (current: number) => {
        this.queryParams.page = current;
        this.getTableData();
    };

    /**
     * size改变
     * @param pageSize
     */
    onSizeChange = (pageSize: number) => {
        this.queryParams.pageSize = pageSize;
        this.getTableData();
    };

    render() {
        const { tableData, loading } = this.state;

        return (
            <PageWrapper title="查询表格" fit bg>
                <CollapseForm
                    extra={<Button>新增</Button>}
                    onFinish={this.search}
                >
                    <FormItem label="规则名称" name="title">
                        <Input />
                    </FormItem>
                    <FormItem label="描述">
                        <Input />
                    </FormItem>
                    <FormItem label="服务调用次数">
                        <Input />
                    </FormItem>
                    <FormItem label="状态">
                        <Input />
                    </FormItem>
                    <FormItem label="上次调度时间">
                        <DatePicker />
                    </FormItem>
                </CollapseForm>
                <Table
                    columns={this.columns}
                    dataSource={tableData.list}
                    pagination={{
                        total: tableData.total,
                        onChange: this.onPageChange,
                        onShowSizeChange: this.onSizeChange,
                    }}
                    rowKey="id"
                    loading={loading}
                ></Table>
            </PageWrapper>
        );
    }
}

export default TableList;
