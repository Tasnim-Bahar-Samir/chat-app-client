import { Button } from 'react-bootstrap'
import React, { useEffect } from 'react'

import socketIO from 'socket.io-client';


const Chat = () => {
    const socket = socketIO("http://localhost:5000/",{transports:['websocket']})
    useEffect(()=>{
        socket.on('connect',()=>{
            alert("Connected")
        })
    },[socket])
  return (
    <div className='w-75 mx-auto h-100 border'>
        <div className='bg-success' style={{height:'50px'}}>

        </div>
        <div className='' style={{height:"400px"}}>

        </div>
        <div className='w-100  p-3'>
            <div className='d-flex justify-content-between'>
            <input type="rounded" style={{flexBasis:'80%', borderRadius:'10px'}}/>
            <Button className='' variant='secondary' style={{flexBasis:'10%'}}>Send</Button>
            </div>
        </div>
    </div>
  )
}

export default Chat