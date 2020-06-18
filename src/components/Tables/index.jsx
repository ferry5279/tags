import React from 'react'
import { Table } from 'antd';
import {
  EditOutlined,
  MinusCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons';
export default function Tables(props) {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: '操作',
      dataIndex: 'id',
      width: '30%',
      key: 'id',
      render: (id,list) => {
        return (
          <p className='icon_p'>
            <span><MinusCircleOutlined /></span>
            <span onClick={()=> updatefn(id,list)}><EditOutlined /></span>
            <span onClick={()=> dellfn(id)}><DeleteOutlined /></span>
          </p>
        )
      }
    },
  ];
  const { data } = props;
  //删除
  const dellfn = (id) =>{
    props.dell(id)
  }
  //编辑
  const updatefn =(id,list)=>{
    props.update(list)
  }
  //点击复选框添加为标签
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const newTags = [];
      selectedRows.forEach(v => {
        newTags.push(v.name)
      })
      props.getTags(newTags,selectedRowKeys)
    },selectedRowKeys:props.tagKeys
  }; 
  return (
    <div className="comp_tables">
      <Table
        rowKey='id'
        columns={columns} 
        rowSelection={rowSelection}
        dataSource={data}
      />
    </div>
  )
}
