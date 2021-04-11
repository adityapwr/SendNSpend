import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch
} from "antd";

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div
      style={{
        padding: "10px",
        background: "#EFF2F5",
        border: "#EFF2FF solid 5px",
        width: "100%"
      }}
    >
      <Form
        labelCol={{
          lg: { span: 12 }
        }}
        wrapperCol={{
          lg: { span: 22 }
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size="large"
      >
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Mobile Number">
          <Input />
        </Form.Item>
        <Form.Item label="Company Name">
          <Input />
        </Form.Item>
        <Form.Item label="Message">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSizeDemo;
