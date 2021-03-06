/**
 * 切换暗黑模式
 * @param type
 */
export function switchDarkTheme(type: boolean) {
    const link = '//lib.baomitu.com/antd/4.16.11/antd.dark.min.css';
    const id = 'dark-theme-mode';
    const styleTag = document.getElementById(id);
    if (styleTag) {
        document.body.removeChild(styleTag);
    }
    if (type) {
        const tag = document.createElement('link');
        tag.id = id;
        tag.rel = 'stylesheet';
        tag.href = link;
        document.body.appendChild(tag);
    }
}
