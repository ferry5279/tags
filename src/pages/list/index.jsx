import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import LazyLoad from 'react-lazy-load'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import { getList } from '@/actions/list'
import './style.less'
function List(props) {
    const { data } = props;
    const [lists, setList] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        props.getList({ page: 1, limit: 9 })
        setList([...data])
    }, [])
    const scrollMore = async page => {
        const res = await props.getList({ page, limit: 9*page })
        console.log(res)
        const newList = [...data, ...res.payload.result.list]
        setList(newList)
        setCount(res.payload.result.count)
    }
    return ( 
      <div className = 'list'>
        <InfiniteScroll initialLoad = { false } // 不让它进入直接加载
        pageStart = { 0 } // 设置初始化请求的页数
        loadMore = { scrollMore } // 监听的ajax请求
        hasMore = { true } // 是否继续监听滚动事件 true 监听 | false 不再监听
        useWindow = { true } // 是否监听 window 滚动条
        loader = { 
          <div className = "load" key={0} >
            <Spin tip = "加载中..." />
            </div>
          }>
        <div className = "data_space" > {
          data.map((v, i) => {
            return ( <div key = { i } >
              <p> { v.title } </p> 
              <p> { v.tags } </p> 
              </div>
            )
          })
        } 
        </div> 
      </InfiniteScroll>
    </div>
  )
}
export default connect(state => {
    return {
        data: state.list.list
    }
}, {
    getList
})(List)