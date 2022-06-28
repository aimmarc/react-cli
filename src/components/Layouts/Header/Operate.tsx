import React from 'react';
import style from './index.less';
import {
    FullscreenOutlined,
    SettingOutlined,
    CaretDownOutlined,
    EditOutlined,
    UserOutlined,
    LogoutOutlined,
    FullscreenExitOutlined,
} from '@ant-design/icons';
import { Menu, Dropdown, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { useFullScreen } from '@/domain/model/entity/app';
import { useUserInfo } from '@/domain/model/entity/user';

interface IProps {
    onLogout: any;
    showFullScreen: boolean;
}

const Operate: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const history = useHistory();
    const [full, onFull] = useFullScreen();
    const [userInfo] = useUserInfo();

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    <EditOutlined /> 修改密码
                </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    <UserOutlined /> 个人中心
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" onClick={props.onLogout}>
                <LogoutOutlined /> 退出登录
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={style.operate}>
            {props.showFullScreen && (
                <div className={style.iconButton} onClick={onFull}>
                    {full ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                </div>
            )}
            <div
                className={style.iconButton}
                onClick={() => history.push('/setting')}
            >
                <SettingOutlined />
            </div>
            <div className={style.user}>
                <Dropdown overlay={menu} trigger={['click']}>
                    <span onClick={(e) => e.preventDefault()}>
                        <Avatar
                            style={{ margin: '0 5px' }}
                            src={userInfo?.avatar}
                        >
                            A
                        </Avatar>{' '}
                        Admin <CaretDownOutlined />
                    </span>
                </Dropdown>
            </div>
        </div>
    );
};

export default Operate;
