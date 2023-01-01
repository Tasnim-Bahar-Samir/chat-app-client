import React from 'react'

const ChatMessage = ({message,user,cls}) => {
  return (
    <div className={`${cls} p-3 rounded-3 w-50 m-2`}>
        <p>{user?user:'You'}:{message}</p>
    </div>
  )
}

export default ChatMessage