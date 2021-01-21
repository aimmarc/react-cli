import React, { useMemo, useState } from "react";
import { Input, Button } from "antd";

interface IChildProps {
  value?: any;
  name?: any;
  onChange?: (event: any) => void;
}

interface IDemoProps {
  demo?: Array<number | string | object | null | undefined>;
  count?: number;
}

interface IDemoState {
  number: number;
  visible: boolean;
}

class Demo extends React.PureComponent<IDemoProps> {
  public state: IDemoState = {
    number: 0,
    visible: false,
  }

  private handleClick = () => {
    // this.setState({
    //   number: this.state.number + 1,
    // })
  }

  public render() {
    console.log('rendered');
    return (
      <div>{this.props.count}<Button onClick={this.handleClick}>+</Button></div>
    )
  }
}

const Child: React.FC<IChildProps> = React.memo((props: IChildProps): JSX.Element => {
  const { value, name, onChange } = props;
  const [demo, setDemo] = useState(['', {}, 1, null, undefined]);
  const getName = () => {
    console.log(0);
    return name + 'hehe';
  }
  const otherName = useMemo(() => getName(), [name]);
  return (
    <div>
      {otherName}
      <Input value={value} onChange={onChange} style={{ width: 160 }} />
      <Demo demo={demo} />
    </div>
  );
});

export default Child;
