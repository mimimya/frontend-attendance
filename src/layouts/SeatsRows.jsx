import React from 'react'
import Seat from './Seat'
const SeatsRows = () => {
  return (
    <div className='mx-1 my-1 h-full w-full bg-cyan-400 flex'>
        <Seat>박선주</Seat>
        <Seat>박선주</Seat>
        <Seat>박선주</Seat>
        <Seat>박선주</Seat>
    </div>
  )
}

export default SeatsRows