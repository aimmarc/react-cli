import { PageWrapper } from "@/components";
import { Button } from "antd";
import React from "react";

class Detail extends React.PureComponent<{}> {
    state = {
        name: "jack",
    };

    render() {
        return (
            <PageWrapper title="基础详情页" bg>
                <Button
                    onClick={() => {
                        this.setState({
                            name: "marry",
                        });
                    }}
                >
                    set name
                </Button>
                {this.state.name}
            </PageWrapper>
        );
    }
}

export default Detail;
