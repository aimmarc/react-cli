import React, { useEffect } from "react";
import BasicRoute from "./router";

function App() {
  useEffect(() => {
    // 根据屏幕宽度自适应，一般在移动端开启
    // document.documentElement.style.fontSize = `calc(${
    //   100 / ((document.body.clientWidth * 2) / 100)
    // }vw)`;
  }, []);

  return (
    <div>
      <BasicRoute />
    </div>
  );
}

export default App;
