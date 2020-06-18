import React,{ useState,useEffect } from 'react'
let id = ''
export default function useResize() {
  const [width,setWidth] = useState(0)
  const fn = () => {
   if(!id){
    id = setTimeout(() => {
      console.log(id)
      id = null
      setWidth(document.body.offsetWidth)
    }, 300);
   }
  }
  useEffect(()=>{
    window.addEventListener('resize',fn)
    return ()=>{ 
      window.removeEventListener('resize',fn)
    }
  },[])
  return width;
}