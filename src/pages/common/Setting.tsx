import React from 'react';
import { PageWrapper } from '@/components';
import { Col, List, Row, Switch } from 'antd';
import { useSettingState } from '@/domain/model/app';

const Setting: React.FC = (): React.ReactElement => {
    const [setting, setSetting] = useSettingState();

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
                                        setSetting('showTabs', value)
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
                                        setSetting('showFullScreen', value)
                                    }
                                />
                            }
                        >
                            是否展示全屏按钮
                        </List.Item>
                        <List.Item
                            extra={
                                <Switch
                                    defaultChecked={setting.dark}
                                    onClick={(value) => {
                                        setSetting('dark', value);
                                    }}
                                />
                            }
                        >
                            暗黑模式
                        </List.Item>
                    </List>
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default Setting;
