import React from 'react'
import useMouse from './useMouse'
import './style.less'
export default function Self() {
    const {x,y} = useMouse()
    return (<div id='self'>{x}-----{y}</div>)
}