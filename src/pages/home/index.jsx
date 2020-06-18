import React,{ useState,useEffect }  from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'
import {
  DEFAULT_DATA,
  SEAR_DATA,
  DELL_DATA,
  ADD_DATA,
  EDIT_DATA,
  ADD_TAGS,
  DELETE_TAGS,
  ADD_TAG_KEYS
} from '@/constants/actionTypes'
import { Tables, Addbtn, Modals } from '@@';
import str from '@/utils/string'
import homeAction from '@/actions/home'

function Home(props){
  const { data, tagslist, tagKeys } = props;
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [obj, setObj] = useState({});
  //点击添加模态框显示
  const showModal = () => {
    setTitle('添加')
    setVisible(true)
  }
  //点击checkbox后获取要添加标签name(从Tables组件中传过来的参数[names,ids])
  const getTags = (values,selectedRowKeys) =>{
    props[ADD_TAGS](values)
    props[ADD_TAG_KEYS](selectedRowKeys)
  }
  //标签删除
  const handleClose = (removedTag,tagss) => {
	  props[DELETE_TAGS](removedTag)//获取从Addbtn组件中的参数[要删除的name]
  }
  //添加
  const addfn = async value => {
    const res = await props[ADD_DATA](value)
    message.info(res.payload.info)
    if (res.payload.status === '200') {
      props[DEFAULT_DATA]()
    }
  }
  //控制模态框显示和隐藏
  const handleOk = e => {
    setVisible(!visible)
  };
  //编辑
  const update = value => {
    setTitle('编辑')
    setObj({name:value.name,id:value.id,age:value.age})
    setVisible(!visible)
  }
  //确定编辑
  const sureEdit = async value => {
    const res = await props[EDIT_DATA](
      {...value,id:localStorage.getItem('id')}
    )
    message.info(res.payload.info)
    if (res.payload.status === '200') {
      props[DEFAULT_DATA]()
    }
  }
  //默认数据
  useEffect(() => {
    props[DEFAULT_DATA]()
  }, [])
  //删除
  const dell = async val => {
    const res = await props[DELL_DATA]({id:val})
    message.info(res.payload.info)
    if (res.payload.status === '200') {
      props[DEFAULT_DATA]()
    }
  }
  return (
    <div>
      <Addbtn
        tags={tagslist}
        showModal={showModal}
        handleClose={handleClose}
      />
      <Tables 
        data={data} 
        getTags={getTags} 
        dell={dell} 
        update={update}
        tagslist={tagslist}
        tagKeys={tagKeys}
      />
      <Modals 
        visible={visible}
        handleOk={handleOk}
        addfn={addfn}
        title={title}
        obj={obj}
        sureEdit={sureEdit}
      />
    </div>
  )
}
export default connect ( state => {
  return {
   data: state.home.data,  
   tagslist: state.home.tags,
   tagKeys: state.home.tagKeys
  }
},{
  DEFAULT_DATA:homeAction[str(DEFAULT_DATA)],
  SEAR_DATA:homeAction[str(SEAR_DATA)],
  DELL_DATA:homeAction[str(DELL_DATA)],
  ADD_DATA:homeAction[str(ADD_DATA)],
  EDIT_DATA:homeAction[str(EDIT_DATA)],
  ADD_TAGS:homeAction[str(ADD_TAGS)],
  DELETE_TAGS:homeAction[str(DELETE_TAGS)],
  ADD_TAG_KEYS:homeAction[str(ADD_TAG_KEYS)]
})(Home)