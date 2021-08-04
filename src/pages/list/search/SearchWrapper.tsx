import React from "react";
import { PageWrapper } from "@/components";
import { Input } from "antd";
import styles from "./SearchWrapper.less";
import { inject, observer } from "mobx-react";

const { Search } = Input;

interface ISearchWrapperProps {
    app: any;
}

class SearchWrapper extends React.PureComponent<ISearchWrapperProps> {
    render() {
        const { title } = this.props.app;

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
                {this.props.children}
            </PageWrapper>
        );
    }
}

export default inject("app")(observer(SearchWrapper));
