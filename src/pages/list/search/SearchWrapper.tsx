import React from 'react';
import { PageWrapper } from '@/components';
import { Input } from 'antd';
import styles from './SearchWrapper.less';
import { useRecoilValue } from 'recoil';
import { titleState } from '@/recoil/app';
const { Search } = Input;

const SearchWrapper = (props: { children: any }) => {
    const title = useRecoilValue(titleState);

    return (
        <PageWrapper title={title} bg fit>
            <div className={styles.searchBar}>
                <Search
                    style={{ width: 500 }}
                    size="large"
                    enterButton="搜索"
                    placeholder="请输入"
                />
            </div>
            {props.children}
        </PageWrapper>
    );
};

export default SearchWrapper;
