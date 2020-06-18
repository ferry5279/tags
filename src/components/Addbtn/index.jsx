import React from 'react'
import { Button, Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import './style.less'
export default function Addbtn(props) {
  const { tags } = props;
  //标签删除
  const handleClose = removedTag => {
    const tagss = tags.filter(tag => tag !== removedTag);
    props.handleClose(removedTag,tagss)
  };
  const forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  const tagChild = tags.map(forMap);
  const showModal = () => {
    props.showModal()
  };
  return (
    <div className = 'btn'>
      <Button type="primary" onClick={showModal}>添加</Button>
      <div>
      <div style={{ marginBottom: 16 }}>
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: 'from',
              duration: 100,
              onComplete: e => {
                e.target.style = '';
              },
            }}
            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
            appear={false}
          >
            {tagChild}
          </TweenOneGroup>
        </div>
      </div>
     
    </div>
  )
}