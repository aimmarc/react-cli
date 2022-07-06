import { settingState } from '@/recoil/app';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

/**
 * 主题hook
 * @returns
 */
const useTheme = (baseColor: string, targetColor?: string) => {
    const setting = useRecoilValue(settingState);
    const { dark } = setting;
    const [color, setColor] = useState(baseColor);

    useEffect(() => {
        setColor(dark ? targetColor || '#000' : baseColor);
    }, [dark]);

    /**
     * 更改主题
     * @param targetColor
     */
    function change(targetColor?: string) {
        setColor(dark ? targetColor || '#000' : baseColor);
        return dark ? targetColor || '#000' : baseColor;
    }

    return { change, dark, color };
};

export default useTheme;
