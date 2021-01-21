import React, { useCallback, useState, useLayoutEffect } from "react";
import { Button } from "antd";
import Child from "./components/Child";
import usePureState from "../../utils/hooks/usePrueState";
let cb: any;

const Index: React.FC = (props) => {
  const [name, setName] = usePureState("");
  console.log('outer', name);

  useLayoutEffect(() => {
    console.log(cb === getList);
    getList();
  }, [name])

  const handleClick = () => {
    cb = getList;
    setName(Math.random() + '', getList)
  }

  const getList = () => {
    console.log('getlist', name);
  }

  return (
    <div>
      {name}
      <Button onClick={handleClick}>呵呵</Button>
    </div>
  );
};

export default Index;
