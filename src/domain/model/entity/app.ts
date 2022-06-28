import routerConfig from '@/common/config/router.config';
import { collapsedState, ISetting, settingState } from '@/recoil/app';
import {
    exitFullScreen,
    fullScreen,
    isFullscreenEnabled,
} from '@/utils/common';
import StorageEnum from '@/utils/constants/storage';
import useFirstEffect from '@/utils/hooks/useFirstEffect';
import { resolveMenuData } from '@/utils/resolveMenuData';
import { switchDarkTheme } from '@/utils/theme';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

/**
 * 设置
 * @returns
 */
const useSettingState = (): [
    ISetting,
    (key: 'showTabs' | 'showFullScreen' | 'dark', value: boolean) => void,
] => {
    const [setting, setSetting] = useRecoilState(settingState);
    const handleSetting = (
        key: 'showTabs' | 'showFullScreen' | 'dark',
        value: boolean,
    ) => {
        if (key === 'dark') {
            switchDarkTheme(value);
        }
        const copySetting = { ...setting };
        copySetting[key] = value;
        localStorage.setItem(
            StorageEnum.SETTING_DATA,
            JSON.stringify(copySetting),
        );
        setSetting(copySetting);
    };
    return [setting, handleSetting];
};

/**
 * 控制菜单展开收起
 * @returns
 */
const useCollapsed = (): [boolean, () => void] => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const handleChange = () => {
        setCollapsed(!collapsed);
    };

    return [collapsed, handleChange];
};

/**
 * 获取菜单数据
 * @returns
 */
const useMenuData = () => {
    const menuData = resolveMenuData(routerConfig);
    return menuData;
};

/**
 * 控制是否全屏
 * @returns
 */
const useFullScreen = (): [boolean, () => void] => {
    const [full, setFull] = useState(false);

    useFirstEffect(() => {
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
    });

    return [
        full,
        () => {
            if (isFullscreenEnabled()) {
                exitFullScreen();
            } else {
                fullScreen();
            }
        },
    ];
};

export { useSettingState, useCollapsed, useMenuData, useFullScreen };
