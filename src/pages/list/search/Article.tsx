import React from "react";
import { PageWrapper } from "@/components";
import { Input } from "antd";
import styles from "./Article.less";

const { Search } = Input;

class Article extends React.PureComponent<{}> {
    render() {
        return (
            <PageWrapper title="搜索列表（文章）" fit bg>
                <div className={styles.searchBar}>
                    <Search
                        style={{ width: 500 }}
                        size="large"
                        enterButton="搜索"
                        placeholder="请输入"
                    />
                </div>
            </PageWrapper>
        );
    }
}

export default Article;
