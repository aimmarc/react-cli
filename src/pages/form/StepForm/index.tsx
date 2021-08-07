import React from "react";
import { PageWrapper } from "@/components";
import {
    Form,
    Input,
    DatePicker,
    Button,
    Tooltip,
    Steps,
    Select,
    Divider,
} from "antd";
import { FormInstance } from "antd/lib/form";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const steps = [
    { title: "填写转账信息" },
    { title: "确认转账信息" },
    { title: "完成" },
];

interface IStepFormProps {
    name: string;
    current: number;
}

class StepForm extends React.PureComponent<{}> {
    state = {
        name: "jack",
        current: 0,
    };
    formRef: any = React.createRef<FormInstance>();

    onFinish = (res: any) => {
        console.log(res);
        alert(JSON.stringify(res));
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    goAhead = () => {
        let { current } = this.state;
        if (current >= 2) {
            current = 0;
        } else {
            current++;
        }
        this.setState({
            current,
        });
    };

    render() {
        const { current } = this.state;
        const customLabel = (
            <div>
                客户
                <span style={{ color: "#999" }}>
                    （选填）
                    <Tooltip placement="top" title="目标的服务对象">
                        <QuestionCircleOutlined />
                    </Tooltip>
                </span>
            </div>
        );

        return (
            <PageWrapper title="分步表单" bg fit>
                <p>
                    将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
                </p>
                <div style={{ padding: "0 100px" }} className="mt-24">
                    <Steps current={current}>
                        {steps.map((item) => (
                            <Steps.Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                </div>
                <div
                    style={{
                        padding: "0 30%",
                    }}
                >
                    {current === 0 && <Step1 />}
                    {current === 1 && <Step2 />}
                    {current === 2 && (
                        <Step3
                            backUp={() =>
                                this.setState({
                                    current: 0,
                                })
                            }
                        />
                    )}
                    {current < 2 && (
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={this.goAhead}
                        >
                            下一步
                        </Button>
                    )}
                </div>
                <Divider />
                <div>
                    <h3>说明</h3>
                    <h4>转账到支付宝账户</h4>
                    <p>
                        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
                    </p>
                    <h4>转账到银行卡</h4>
                    <p>
                        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
                    </p>
                </div>
            </PageWrapper>
        );
    }
}

export default StepForm;
