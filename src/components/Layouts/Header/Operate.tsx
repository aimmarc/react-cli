import React, { useState, useEffect, MouseEventHandler } from "react";
import style from "./index.less";
import {
    FullscreenOutlined,
    SettingOutlined,
    CaretDownOutlined,
    EditOutlined,
    UserOutlined,
    LogoutOutlined,
    FullscreenExitOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Avatar } from "antd";
import {
    exitFullScreen,
    fullScreen,
    isFullscreenEnabled,
} from "@/utils/common";
import { useHistory } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { IUserStore } from "@/store/modules/user";

interface IProps {
    onLogout: any;
    showFullScreen: boolean;
    user?: IUserStore;
}

const Operate: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { user } = props;
    const [full, setFull] = useState(false);
    const history = useHistory();

    useEffect(() => {
        window.onresize = function () {
            if (document.fullscreenElement) {
                setFull(true);
            } else {
                setFull(false);
            }
        };
        return function () {
            window.onresize = null;
        };
    }, []);

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

    const onFull = () => {
        if (isFullscreenEnabled()) {
            exitFullScreen();
        } else {
            fullScreen();
        }
    };

    return (
        <div className={style.operate}>
            {props.showFullScreen && (
                <div className={style.iconButton} onClick={onFull}>
                    {full ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                </div>
            )}
            <div
                className={style.iconButton}
                onClick={() => history.push("/setting")}
            >
                <SettingOutlined />
            </div>
            <div className={style.user}>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <span onClick={(e) => e.preventDefault()}>
                        <Avatar
                            style={{ margin: "0 5px" }}
                            src={user?.userInfo.avatar}
                        >
                            A
                        </Avatar>{" "}
                        Admin <CaretDownOutlined />
                    </span>
                </Dropdown>
            </div>
        </div>
    );
};

export default inject("user")(observer(Operate));
