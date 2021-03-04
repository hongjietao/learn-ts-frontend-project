import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, message } from "antd";
import axios from "axios";
import "./style.css";

class Home extends Component {
  state = {
    loaded: false,
    isLogin: true,
  };
  componentDidMount() {
    axios.get("/api/isLogin").then((res) => {
      if (!res.data?.data) {
        this.setState({
          loaded: true,
          isLogin: false,
        });
      } else {
        this.setState({
          loaded: true,
        });
      }
    });
  }

  handleLogoutClick = () => {
    axios.get("/api/logout").then((res) => {
      if (res.data?.data) {
        this.setState({
          isLogin: false,
        });
      } else {
        message.error("退出失败");
      }
    });
  };

  handleCrowllerClick = () => {};

  render() {
    const { isLogin, loaded } = this.state;
    if (isLogin) {
      if (loaded) {
        return (
          <div className="home-page">
            <Button type="primary" onClick={this.handleCrowllerClick}>
              爬取
            </Button>
            <Button type="primary">show</Button>
            <Button type="primary" onClick={this.handleLogoutClick}>
              退出
            </Button>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return <Redirect exact to="/login" />;
    }
  }
}

export default Home;
