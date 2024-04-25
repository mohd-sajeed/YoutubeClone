import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    <div className='flex p-1 m-1'>
     <img
          className="h-6"
          src="https://cdn-icons-png.freepik.com/256/64/64572.png"
          alt="userIcon"
        />
        <span className='pl-2 text-sm text-gray-600'>{name}</span>
        <span className='pl-2 text-sm'>{message}</span>

    </div>
  )
}

export default ChatMessages