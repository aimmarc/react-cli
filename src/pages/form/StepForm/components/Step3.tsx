import { Button, Descriptions, Result } from "antd";
import { PropTypes } from "mobx-react";
import React from "react";

interface IStep3Props {
    backUp?: () => void;
}

const Step3: React.FC<IStep3Props> = (props): React.ReactElement => {
    return (
        <div>
            <Result
                status="success"
                title="操作成功"
                subTitle="预计两小时内到账"
                extra={[
                    <Button type="primary" key="console" onClick={props.backUp}>
                        再转一笔
                    </Button>,
                    <Button key="buy">查看账单</Button>,
                ]}
            />
            <div style={{ backgroundColor: "rgb(250, 250, 250)", padding: 24 }}>
                <Descriptions>
                    <Descriptions.Item label="付款账户" span={12}>
                        react-cli@alipay.com
                    </Descriptions.Item>
                    <Descriptions.Item label="收款账户" span={12}>
                        react-cli@alipay.com
                    </Descriptions.Item>
                    <Descriptions.Item label="收款人姓名" span={12}>
                        aimmarc
                    </Descriptions.Item>
                    <Descriptions.Item label="转账金额" span={12}>
                        500元
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    );
};

export default Step3;
