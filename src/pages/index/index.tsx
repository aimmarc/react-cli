import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import api from "@/utils/request";

const Index: React.FC = () => {
  const [num, setNum] = useState({ count: 0 });

  useEffect(() => {
    api.post("/api/user/login");
  }, []);

  return (
    <div>
      {num.count}
      <Button
        onClick={() =>
          setNum((state) => ({ ...state, count: state.count + 1 }))
        }
      >
        +
      </Button>
      <Link to="/detail">detail</Link>
    </div>
  );
};

export default Index;
