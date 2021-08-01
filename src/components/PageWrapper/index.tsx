import React from "react";
import style from "./index.less";

interface IProps {
  fit?: boolean;
  bg?: boolean;
  children?: any;
}

const PageWrapper: React.FC<IProps> = (props: IProps): React.ReactElement => {
  return (
    <div
      className={style.pageWrapper}
      style={{
        minHeight: props.fit ? "calc(100vh - 104px)" : "auto",
        backgroundColor: props.bg ? "#fff" : "",
      }}
    >
      {props.children}
    </div>
  );
};

export default PageWrapper;
