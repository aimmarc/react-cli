import React from 'react';
import { PageWrapper } from '@/components';
import { Col, List, Row, Switch } from 'antd';
import { switchDarkTheme } from '@/utils/theme';
import { useRecoilState } from 'recoil';
import { settingState } from '@/recoil/app';

const Setting: React.FC = (): React.ReactElement => {
    const [setting, setSetting] = useRecoilState(settingState);

    const handleChange = (key: string, value: boolean) => {
        setting[key] = value;
        setSetting(setting);
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
                                        handleChange('showTabs', value)
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
                                        handleChange('showFullScreen', value)
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
                                        switchDarkTheme(value);
                                        handleChange('dark', value);
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
