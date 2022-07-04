import useTheme from '@/utils/hooks/useTheme';
import React from 'react';

export interface IThemeProps {
    children: (color: string) => React.ReactNode;
    baseColor: string;
    targetColor?: string;
}

/**
 * 使用主题
 * @param props
 * @returns
 */
const Theme: React.FC<IThemeProps> = (props): React.ReactElement => {
    const { color } = useTheme(props.baseColor, props.targetColor);

    return <>{props.children(color)}</>;
};

export default Theme;
