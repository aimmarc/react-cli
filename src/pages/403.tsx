import React from "react";
import { Result, Button } from "antd";

const NotAccess: React.FC = () => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you don't have access to this page."
            extra={
                <Button type="primary" href="/">
                    Back Home
                </Button>
            }
        />
    );
};

export default NotAccess;
