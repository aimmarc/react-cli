import { Card, Input, Table, Button, Space, Popconfirm, message } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { useState } from "react";

const data = [
    {
        id: "1",
        name: "John Brown",
        workNumber: "000001",
        department: "New York No. 1 Lake Park",
    },
    {
        id: "2",
        name: "John Brown",
        workNumber: "000002",
        department: "New York No. 1 Lake Park",
    },
    {
        id: "3",
        name: "John Brown",
        workNumber: "000003",
        department: "New York No. 1 Lake Park",
    },
];

type TEditData = {
    type: "create" | "edit";
    index: number | null;
    data: any;
};

const EditTable: React.FC = (): React.ReactElement => {
    const [dataSource, setDatasource]: [any[], any] = useState(data);
    const [editData, setEditData]: [TEditData, any] = useState({
        type: "create",
        index: null,
        data: null,
    });

    const columns: ColumnsType<any> = [
        {
            title: "成员姓名",
            dataIndex: "name",
            width: 200,
            render: (text, record, index) => {
                return editData.index === index ? (
                    <Input
                        defaultValue={editData.data && editData.data.name}
                        onBlur={(event) =>
                            handleBlur("name", event.target.value)
                        }
                    />
                ) : (
                    text
                );
            },
        },
        {
            title: "工号",
            dataIndex: "workNumber",
            width: 200,
            render: (text, record, index) => {
                return editData.index === index ? (
                    <Input
                        defaultValue={editData.data && editData.data.workNumber}
                        onBlur={(event) =>
                            handleBlur("workNumber", event.target.value)
                        }
                    />
                ) : (
                    text
                );
            },
        },
        {
            title: "所属部门",
            dataIndex: "department",
            width: 200,
            render: (text, record, index) => {
                return editData.index === index ? (
                    <Input
                        defaultValue={editData.data && editData.data.department}
                        onBlur={(event) =>
                            handleBlur("department", event.target.value)
                        }
                    />
                ) : (
                    text
                );
            },
        },
        {
            title: "操作",
            width: 100,
            render: (_, record, index) => {
                if (editData.index === index) {
                    return (
                        <Space>
                            <a onClick={handleSave}>保存</a>
                            <a onClick={() => handleCancel()}>取消</a>
                        </Space>
                    );
                }
                return (
                    <Space>
                        <a onClick={() => handleEdit(index, record, "edit")}>
                            编辑
                        </a>
                        <Popconfirm
                            title="删除此行？"
                            onConfirm={() => handleRemove(index)}
                            okText="是"
                            cancelText="否"
                        >
                            <a>删除</a>
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];

    /**
     * 编辑
     * @param index
     * @param record
     * @returns
     */
    const handleEdit = (
        index: number,
        record: object,
        type: "create" | "edit"
    ) => {
        if (editData.index !== null) {
            message.warning("仅能同时编辑一行");
            return;
        }
        if (type === "create") {
            const data = [...dataSource, record];
            setDatasource(data);
        }
        setEditData({
            type,
            index,
            data: record,
        });
    };

    /**
     * 取消编辑
     */
    const handleCancel = () => {
        if (editData.type === "create") {
            handleRemove(dataSource.length - 1);
        }
        setEditData({
            index: null,
            data: null,
        });
    };

    /**
     * 失去焦点保存数据
     * @param key
     * @param value
     */
    const handleBlur = (key: string, value: any) => {
        const data = { ...editData.data };
        data[key] = value;
        setEditData({ index: editData.index, data });
    };

    /**
     * 保存
     */
    const handleSave = () => {
        const { index } = editData;
        if (index !== null && index <= dataSource.length - 1) {
            const data = [...dataSource];
            data.splice(index, 1, editData.data);
            setDatasource(data);
        } else {
            const data = [...dataSource, editData.data];
            setDatasource(data);
        }
        handleCancel();
    };

    /**
     * 删除
     * @param index
     */
    const handleRemove = (index: number) => {
        const data = [...dataSource];
        data.splice(index, 1);
        setDatasource(data);
    };

    return (
        <Card className="mt-12" title="成员管理">
            <Table
                rowKey="id"
                pagination={false}
                columns={columns}
                dataSource={dataSource}
            />
            <Button
                block
                type="dashed"
                className="mt-12"
                onClick={() =>
                    handleEdit(
                        dataSource.length,
                        {
                            id: new Date().getTime() + "",
                            name: "",
                            workNumber: "",
                            department: "",
                        },
                        "create"
                    )
                }
            >
                添加一行数据
            </Button>
        </Card>
    );
};

export default React.memo(EditTable);
