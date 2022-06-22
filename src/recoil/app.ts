import { TTabs } from '@/components/Layouts/TabBar';
import StorageEnum from '@/utils/constants/storage';
import { atom, AtomOptions } from 'recoil';

function getTabsData() {
    const tabsData = localStorage.getItem(StorageEnum.TABS_DATA) || '[]';
    return JSON.parse(tabsData);
}

/**
 * tabData
 */
const tabState = atom<TTabs[]>({
    key: 'tabState',
    default: getTabsData(),
});

/**
 * 激活的tab
 */
const activeTabState = atom<string>({
    key: 'activeTabState',
    default: '',
});

export { tabState, activeTabState };
