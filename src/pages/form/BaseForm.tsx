import React from "react";
import { PageWrapper } from "@/components";

class BaseForm extends React.PureComponent<{}> {
    state = {
        name: "jack",
    };

    render() {
        return <PageWrapper title="基础表单">BaseForm</PageWrapper>;
    }
}

export default BaseForm;
