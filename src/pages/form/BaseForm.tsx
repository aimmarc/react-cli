import React from "react";

class BaseForm extends React.PureComponent<{}> {
  state = {
    name: "jack",
  };

  render() {
    return <div>BaseForm</div>;
  }
}

export default BaseForm;
