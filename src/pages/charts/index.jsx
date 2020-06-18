import React,{ useState,useEffect }  from 'react'
import echarts from 'echarts'
import _ from 'lodash'
import { Input } from 'antd'
import { Resize,Selfhook } from'@@'
import './style.less'
let id = ''
export default function Charts(props){
  const width = Resize()
  const [chart,setChart] = useState()
  useEffect(()=>{
    setChart(echarts.init(document.getElementById('main'))) ;
    const option = {
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    };
    chart && chart.setOption(option);
  },[chart])
  useEffect(()=>{
    chart && chart.resize()
  },[width])
  // const onChange = _.debounce(() => console.log('111'),500)
  const onChange = _.throttle(() => console.log('222'),3000,{ 'trailing': false })
  return (
    <div>
      <div id='main'></div>
      <Input placeholder="Basic usage" onChange={onChange} />
      <Selfhook />
    </div>
  )
}