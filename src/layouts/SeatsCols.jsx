import React from 'react'
import SeatsRows from './SeatsRows'
const SeatsCols = () => {
  return (
    <div className='flex'>
        <SeatsRows/>
        <SeatsRows/>
    </div>
  )
}

export default SeatsCols