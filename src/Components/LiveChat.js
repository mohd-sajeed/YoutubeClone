import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../redux/ChatSlice'
import { generateRandomName, generateRandomText } from '../Utils/helper'

const LiveChat = () => {
  const chatMessages = useSelector(store => store.chat.messages)
  const dispatch = useDispatch()
  const [liveMessage, setLiveMessage] = useState()
  const [isShowChat, setIsShowChat] = useState(true)
  console.log(isShowChat)

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
      //   console.log("API Polling");
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomText(20) + '🚀'
        })
      )
    }, 500)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      addMessages({
        name: 'Sajid',
        message: liveMessage
      })
    )
    setLiveMessage('')
  }

  return (
    <>
      {
        !isShowChat ? (
          <div className='w-[392px] h-[34px] mx-3 text-center'>
            <button
              onClick={()=>setIsShowChat(true)}
              className='hover:bg-gray-200 rounded-full w-full border'
            >
              Show Chat
            </button>
          </div>
        ) : (
          <div className='border rounded-lg ml-6'>
            <div className='p-2 m-2 font-normal'>Top Chat</div>
            <hr className='border my-2 ' />
            <div className=' w-[402px] h-[596px] hover:overflow-y-scroll flex flex-col-reverse overflow-hidden'>
              {/* Disclaimer: Dont use index as keys */}
              {chatMessages.map((c, index) => (
                <ChatMessages key={index} name={c.name} message={c.message} />
              ))}
            </div>
            <hr className='border my-2' />
            <form onSubmit={e => handleSubmit(e)}>
              <div className='flex px-2 '>
                <img
                  className='h-6'
                  src='https://cdn-icons-png.freepik.com/256/64/64572.png'
                  alt='userIcon'
                />
                <div className='w-full px-2'>
                  <div className='font-medium text-sm px-2 text-gray-500'>
                    Sajid
                  </div>

                  <input
                    type='text'
                    value={liveMessage}
                    onChange={e => setLiveMessage(e.target.value)}
                    maxLength='200'
                    className='w-full border-b-[1px] border-gray-400 focus:border-blue-500 focus:border-b-[2px] pb-2 text-sm outline-none'
                    placeholder='Chat...'
                  />
                  <div className='flex justify-end text-gray-500 text-sm mt-2'>
                    <span className='mr-3'>{liveMessage?.length}/200</span>
                    <button className='border rounded-full px-3'>Send</button>
                  </div>
                </div>
              </div>
            </form>
            <hr className='border my-2' />
            <div className='mx-3 text-center'>
              <button
                className='hover:bg-gray-200 hover:rounded-full w-full text-sm py-1 my-2'
                onClick={() => setIsShowChat(false)}
              >
                Hide Chat
              </button>
            </div>
          </div>
        )}
    </>
  )
}

export default LiveChat
