import { Button } from "antd";
import React from "react";

class Detail extends React.PureComponent<{}> {
  state = {
    name: "jack",
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Detail;
