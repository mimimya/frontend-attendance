import React from 'react'
import Seat from './Seat'
const SeatsRows = (props) => {
  const rows = props.rows;
  
  return (
    <div className='mx-1 my-1 justify-center items-center bg-slate-500 flex'>
      <div>{rows && rows.slice(0,4).map((name, index)=><Seat key={index}>{name}</Seat>)}</div>
      <div>{rows && rows.slice(4,8).map((name, index)=> <Seat key={index}>{name}</Seat>)}</div>
      <div>{rows && rows.slice(8,12).map((name, index)=> <Seat key={index}>{name}</Seat>)}</div>
      <div>{rows && rows.slice(12,16).map((name, index)=> <Seat key={index}>{name}</Seat>)}</div>
        
        
        
        
    </div>
  )
}

export default SeatsRows