import React from 'react'

const ContainerLayout = ({children}) => {
  return (
    <div className='w-full h-full bg-slate-500'>
        {children}
    </div>
  )
}

export default ContainerLayout