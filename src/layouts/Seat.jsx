import {React } from 'react'

const Seat = ({children}) => {
  return (
    <div className='w-500 h-500 m-2 justify-center flex bg-yellow-300'>
        {children}
    </div>
  )
}

export default Seat