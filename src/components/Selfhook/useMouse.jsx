import { useState, useEffect } from 'react'
export default function useMouse() {
    const [data, setData] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const fn = event => {
            setData({ x: event.clientX, y: event.clientY })
        }
        document.addEventListener('mousemove', fn)
            //卸载
        return () => { document.removeEventListener('mousemove', fn) }
    }, [])
    return data
}