import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { IRouter } from '@/common/config/router.config';
import { useHistory } from 'react-router-dom';
import IconFont from '../../IconFont';

interface IProps {
    menuData: any[];
    collapsed: boolean;
}

const SiderMenu: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { menuData, collapsed } = props;
    const [openKeys, setKeys]: any = useState([]);
    const [selectedKeys, setSelectedKeys]: any = useState([]);
    const [unmount, setUnmount]: [boolean, any] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            init();
        });
        history.listen(() => {
            if (unmount) {
                return;
            }
            init();
        });
        return () => {
            setUnmount(true);
        };
    }, []);

    useEffect(() => {
        if (!collapsed) {
            resolveOpenKeys(history.location.pathname);
        }
    }, [collapsed]);

    const init = () => {
        setSelectedKeys([history.location.pathname]);
        resolveOpenKeys(history.location.pathname);
    };

    /**
     * 处理打开的keys
     * @param path
     */
    const resolveOpenKeys = (path: string) => {
        function loop(list: IRouter[], parent: any | null) {
            list.forEach((item: IRouter) => {
                if (item.path === path) {
                    const ps: any[] = [];
                    const transparent = (p: any) => {
                        if (p?.parent) {
                            ps.push(p.parent?.path);
                            transparent(p.parent);
                        }
                    };
                    transparent(parent);
                    setKeys([parent?.path, ...ps]);
                    return;
                }
                if (item?.routes && item?.routes?.length > 0) {
                    loop(item.routes, { ...item, parent });
                }
            });
        }
        loop(menuData, null);
    };

    /**
     * 渲染tree
     * @param data
     * @returns
     */
    const renderTree = (data: any[]) => {
        return data.map((item: IRouter) => {
            if (item.routes) {
                return (
                    <Menu.SubMenu
                        icon={item.icon && <IconFont type={item?.icon} />}
                        title={item.name}
                        key={item.path}
                    >
                        {renderTree(item.routes)}
                    </Menu.SubMenu>
                );
            }
            if (
                !item.redirect &&
                item.component &&
                item.path &&
                !item.hideOnMenu
            ) {
                return (
                    <Menu.Item
                        key={item.path}
                        icon={item.icon && <IconFont type={item?.icon} />}
                    >
                        {item.name}
                    </Menu.Item>
                );
            }
        });
    };

    /**
     * 菜单打开事件
     * @param keys
     */
    const onOpenChange = (keys: any[]) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        const rootSubmenuKeys = menuData
            .map((item) => item.path)
            .fill((item: any) => item);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setKeys(keys);
        } else {
            setKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    /**
     * 菜单选择事件
     * @param e
     */
    const onSelect = (e: any) => {
        history.push(e.key);
        setSelectedKeys([e.key]);
    };

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            inlineCollapsed={collapsed}
            style={{ borderRight: 0 }}
        >
            {menuData.map(
                (item: IRouter) =>
                    !item.redirect &&
                    item.path &&
                    (item.routes ? (
                        <Menu.SubMenu
                            icon={item.icon && <IconFont type={item?.icon} />}
                            title={item.name}
                            key={item.path}
                        >
                            {renderTree(item.routes)}
                        </Menu.SubMenu>
                    ) : (
                        <Menu.Item
                            key={item.path}
                            icon={item.icon && <IconFont type={item?.icon} />}
                        >
                            {item.name}
                        </Menu.Item>
                    )),
            )}
        </Menu>
    );
};

export default SiderMenu;
