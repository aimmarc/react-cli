import React from "react";
import { Result, Button } from "antd";

const ServerError: React.FC = () => {
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, the server is reporting an error."
            extra={
                <Button type="primary" href="/">
                    Back Home
                </Button>
            }
        />
    );
};

export default ServerError;
