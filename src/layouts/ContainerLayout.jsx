import React from 'react'

const ContainerLayout = ({children}) => {
  return (
    <div className='px-5 py-4 border-b border-slate-200 dark:border-slate-700"'>
        {children}
    </div>
  )
}

export default ContainerLayout