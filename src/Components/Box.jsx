import React from 'react'
import Item from './Item'

function Box(props) {
    const items = props.data.map(
        (singleData, index)=>{
        return<Item item={singleData.item} time={singleData.time} id={index}
        removeHandler ={props.removeHandler}/>
        }
    )
  return (
    <div className='p-3'>
        {items}
    </div>
  )
}

export default Box