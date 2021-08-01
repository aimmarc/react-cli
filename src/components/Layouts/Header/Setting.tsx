import React from "react";
import { Modal } from "antd";

interface ISettingProps {
  visible: boolean;
}

const Setting: React.FC<ISettingProps> = (
  props: ISettingProps
): React.ReactElement => {
  return <Modal></Modal>;
};

export default Setting;
