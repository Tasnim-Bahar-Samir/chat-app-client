import { Button } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { user } from '../Join/Join';
import socketIO from 'socket.io-client';


const Chat = () => {
    console.log(user)
    const socket = socketIO("http://localhost:5000/",{transports:['websocket']})
    useEffect(()=>{
        socket.on('connect',()=>{
            alert('connected')
        })
        socket.emit("joined", {user})
        socket.on('welcomeMsg',({user,message})=>{
            console.log(user,message)
        })
        socket.on('joinMsg',({user,message})=>{
            console.log(user,message)
        })
        socket.on('disconnected',({user,message})=>{
            console.log(user,message)
        })
    },[socket])
  return (
    <div className='w-75 mx-auto h-100 border'>
        <div className='bg-success' style={{height:'50px'}}>

        </div>
        <div className='' style={{height:"400px"}}>

        </div>
        <div className='w-100  p-3'>
            {user}
            <div className='d-flex justify-content-between'>
            <input type="rounded" style={{flexBasis:'80%', borderRadius:'10px'}}/>
            <Button className='' variant='secondary' style={{flexBasis:'10%'}}>Send</Button>
            </div>
        </div>
    </div>
  )
}

export default Chat