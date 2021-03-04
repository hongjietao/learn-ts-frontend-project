import axios from "axios";
import qs from "qs";
import React, { FC, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import "./style.css";
import { Redirect } from "react-router-dom";

interface Props {
  form: FormFields;
}
interface FormFields {
  password: string;
}

const LoginForm: FC<Props> = () => {
  const [state, setState] = useState<{ isLogin: boolean }>({ isLogin: false });
  const onFinish = (values: FormFields) => {
    if (values.password) {
      axios
        .post(
          "/api/login",
          qs.stringify({
            password: values.password,
          }),
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          if (res.data?.data) {
            setState({
              isLogin: true,
            });
          } else {
            message.error(res.data.errMsg);
          }
        });
    }
    // console.log("Received values of form: ", values);
  };

  return state.isLogin ? (
    <Redirect to="/" />
  ) : (
    <div className="login-page">
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入登陆密码!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="请输入登陆密码！"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
