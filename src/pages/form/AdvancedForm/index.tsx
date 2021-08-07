import React from "react";
import { FooterBar, PageWrapper } from "@/components";
import { Tooltip, PageHeader, Button } from "antd";
import { FormInstance } from "antd/lib/form";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Store from "./components/Store";
import Premission from "./components/Premission";
import EditTable from "./components/EditTable";

class AdvancedForm extends React.PureComponent<{}> {
    state = {
        name: "jack",
    };
    formRef: any = React.createRef<FormInstance>();
    formRef2: any = React.createRef<FormInstance>();

    onFinish = () => {
        this.formRef2.current.onSubmit().then((res: object) => {
            console.log(res);
        });
        this.formRef.current.onSubmit().then((res: object) => {
            console.log(res);
        });
    };

    onReset = () => {
        this.formRef2.current.onReset();
        this.formRef.current.onReset();
    };

    render() {
        return (
            <PageWrapper custom style={{ paddingBottom: 45 }}>
                <PageHeader
                    title="高级表单"
                    style={{ backgroundColor: "#fff" }}
                >
                    高级表单常见于一次性输入和提交大批量数据的场景。
                </PageHeader>
                <Store ref={this.formRef2} />
                <Premission ref={this.formRef} />
                <FooterBar>
                    <Button onClick={this.onReset}>重置</Button>
                    <Button type="primary" onClick={this.onFinish}>
                        提交
                    </Button>
                </FooterBar>
                <EditTable />
            </PageWrapper>
        );
    }
}

export default AdvancedForm;
