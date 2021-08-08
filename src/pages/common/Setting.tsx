import React from "react";
import { PageWrapper } from "@/components";
import { Col, List, Row, Switch } from "antd";
import { inject, observer } from "mobx-react";
import { IAppStore, ISetting } from "@/store/modules/app";

interface ISettingProps {
    app: IAppStore;
}

const Setting: React.FC<ISettingProps> = (props): React.ReactElement => {
    const { setting } = props.app;

    const handleChange = (key: string, value: boolean) => {
        setting[key] = value;
        props.app.setSetting(setting);
    };

    return (
        <PageWrapper bg fit title="设置" goBack>
            <Row>
                <Col span={12}>
                    <List>
                        <List.Item
                            extra={
                                <Switch
                                    defaultChecked={setting.showTabs}
                                    onClick={(value) =>
                                        handleChange("showTabs", value)
                                    }
                                />
                            }
                        >
                            多Tab页支持
                        </List.Item>
                        <List.Item
                            extra={
                                <Switch
                                    defaultChecked={setting.showFullScreen}
                                    onClick={(value) =>
                                        handleChange("showFullScreen", value)
                                    }
                                />
                            }
                        >
                            是否展示全屏按钮
                        </List.Item>
                    </List>
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default inject("app")(observer(Setting));
