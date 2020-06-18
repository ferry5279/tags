import React from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { getReg } from '@/actions/login'
import './style.less'
 function Reg (props) {
   const { getReg } = props;
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 5,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = async values => {
    const res = await getReg(values)
    if(res.payload.status === '200'){
      props.history.push('/login')
    }
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入账号',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="pwd"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}
export default connect ( state => {
  return {}
},{
  getReg
})(Reg)
