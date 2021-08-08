import React from "react";

interface IFormGroupProps {
    gap?: number | string;
    label?: string;
}

const FormGroup: React.FC<IFormGroupProps> = (props): React.ReactElement => {
    return (
        <div className="ant-pro-form-group">
            <div className="ant-pro-form-group-title">{props.label}</div>
            <div
                className="ant-space ant-space-horizontal ant-space-align-center ant-pro-form-group-container"
                style={{ gap: props.gap }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default FormGroup;
