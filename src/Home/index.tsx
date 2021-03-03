import React, { FC } from "react";
import { Button } from "antd";
import "./style.css";

const Home: FC = () => {
  return (
    <div className="home-page">
      <Button type="primary">爬取</Button>
      <Button type="primary">show</Button>
      <Button type="primary">退出</Button>
    </div>
  );
};

export default Home;
