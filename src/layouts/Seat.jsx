import {React } from 'react'

const Seat = ({children}) => {
  return (
    <div className='m-2 w-20 h-20 flex justify-center items-center border-b border-slate-500 bg-slate-50'>
        {children}
    </div>
  )
}

export default Seat