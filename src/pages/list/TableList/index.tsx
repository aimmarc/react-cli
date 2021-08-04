import React from "react";
import { PageWrapper } from "@/components";
import { Input, Form, DatePicker, Button, Table, Badge, message } from "antd";
import { CollapseForm } from "@/components";
import { injectModel } from "@/models";
import EditModal from "./components/EditModal";
import { IListPageResponse } from "@/utils/api/httpResponse";

const FormItem = Form.Item;

interface ITableListState {
    tableData: {
        total: number;
        list: any[];
    };
    loading: boolean;
    visible: boolean;
}

class TableList extends React.Component<{}, ITableListState> {
    columns = [
        {
            title: "规则名称",
            dataIndex: "title",
        },
        {
            title: "描述",
            dataIndex: "desc",
        },
        {
            title: "服务调用次数",
            dataIndex: "temp",
        },
        {
            title: "状态",
            dataIndex: "status",
            render: (text: number) => (
                <Badge
                    text={this.status[text].label}
                    status={this.status[text].status}
                />
            ),
        },
        {
            title: "上次调度时间",
            dataIndex: "lastDate",
        },
        {
            title: "操作",
            render: () => (
                <React.Fragment>
                    <Button type="link">配置</Button>
                    <Button type="link">订阅报警</Button>
                </React.Fragment>
            ),
        },
    ];
    state = {
        tableData: {
            total: 0,
            list: [],
        },
        loading: false,
        visible: false,
    };
    queryParams = {
        page: 1,
        pageSize: 10,
    };
    status: any = {
        0: { label: "异常", status: "error" },
        1: { label: "已上线", status: "success" },
        2: { label: "运行中", status: "processing" },
        3: { label: "已关闭", status: "default" },
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
        const res: IListPageResponse = await injectModel.listService
            .table(this.queryParams)
            .catch(() => this.setState({ loading: false }));
        const { code, data } = res;
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

    handleCreate = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    handleOk = () => {
        this.setState({ visible: false });
        message.success("规则添加成功");
        this.queryParams.page = 1;
        this.getTableData();
    };

    render() {
        const { tableData, loading, visible } = this.state;

        return (
            <PageWrapper title="查询表格" fit bg>
                <CollapseForm
                    extra={
                        <Button type="primary" onClick={this.handleCreate}>
                            新增
                        </Button>
                    }
                    onFinish={this.search}
                    loading={loading}
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
                        <DatePicker style={{ width: "100%" }} />
                    </FormItem>
                </CollapseForm>
                <Table
                    columns={this.columns}
                    dataSource={tableData.list}
                    pagination={{
                        total: tableData.total,
                        onChange: this.onPageChange,
                        onShowSizeChange: this.onSizeChange,
                        showTotal: (total) => `共${total}条数据`,
                    }}
                    rowKey="id"
                    loading={loading}
                    size="middle"
                ></Table>
                <EditModal
                    visible={visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                />
            </PageWrapper>
        );
    }
}

export default TableList;
