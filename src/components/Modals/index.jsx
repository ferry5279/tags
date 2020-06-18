import React,{ useEffect } from 'react'
import { Modal, Form,Input,Button } from 'antd';
export default function Modals(props) {
  const [form] = Form.useForm()
  const { visible,title,obj } = props;
  const handleOk = e => {
    props.handleOk()
  };
  //模态框确定按钮
  const onFinish = values => {
    if (title === '添加') {
      props.addfn(values)
    } else {
      props.sureEdit(values)
      console.log(values)
    } 
    props.handleOk()
  };
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 12,
    },
  }
  useEffect(() => {
    if (title === '添加') {
      form.resetFields()
    } else {//回填
      form.setFieldsValue(obj)
      localStorage.setItem('id',obj.id)
    }
  })
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        footer={[]}
        onCancel={handleOk}
      >
        <Form
        {...layout}
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
        <Form.Item label="姓名"  name="name">
          <Input /> 
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button  onClick={props.handleOk}>
            取消
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  </div>
  )
}
