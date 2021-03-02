import React, { FC } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import "./login.css";

interface Props {
  form: FormFields;
}
 
interface FormFields{
  password: string 
}

const loginForm: FC<Props> = () => {
  const onFinish = (values: FormFields) => {
    console.log("Received values of form: ", values);
  };

  return (
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

export default loginForm;
