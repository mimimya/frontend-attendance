import React from 'react'
import SeatsRows from './SeatsRows'
const SeatsCols = () => {
const col_row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
  return (
      <div className='flex'>
        {col_row && <SeatsRows rows={col_row.slice(0,17)}/>}
        {col_row && <SeatsRows rows={col_row.slice(17,33)}/>}
        
      </div>
  )
}

export default SeatsCols