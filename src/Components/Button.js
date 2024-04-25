import React from 'react'

const Button = ({name}) => {
  return (
    <div className='p-2 m-2'>
    <button className='bg-gray-100 px-3 py-1 hover:bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button