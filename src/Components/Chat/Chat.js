import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { user } from '../Join/Join';
import socketIO from 'socket.io-client';
import ChatMessage from '../ChatMessage/ChatMessage';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket ;

const Chat = () => {
    const[id,setId] = useState('')
    console.log(user)
    const [messages,setMessages] = useState([])
    
    const handleSend = (e)=>{
        e.preventDefault()
        const message = e.target.message.value;
        console.log(message)
        socket.emit('message',({message,id}))
        e.target.reset()
    }
console.log(messages)


    useEffect(()=>{
     socket = socketIO("http://localhost:5000/",{transports:['websocket']})
        socket.on('connect',()=>{
            alert('connected')
            setId(socket.id)
        })
        socket.emit("joined", {user})
        socket.on('welcomeMsg',(data)=>{
            setMessages([...messages,data])
        })
        socket.on('joinMsg',(data)=>{
        })
        socket.on('disconnected',(data)=>{
            
        })
        return () => {
            socket.off()
          }
        
    },[])

    useEffect(()=>{
        socket.on('send',(data)=>{
            setMessages([...messages,data])
            return()=>{
                socket.off()
            }
        })
    },[messages])
  return (
    <div className='w-75 mx-auto h-100 border'>
        <div className='bg-success' style={{height:'50px'}}>

        </div>
        <ScrollToBottom className='chatBox'>
            {messages.map((message,idx)=><ChatMessage key={idx} message={message.message} user ={message.id===id?'':message.user} cls={message.id===id?'right':'left'}/>)}
        </ScrollToBottom>
        <div className='w-100  p-3'>
            {user}
            <form onSubmit={handleSend} className='d-flex justify-content-between'>
            <input name='message' type="rounded" style={{flexBasis:'80%', borderRadius:'10px'}}/>
            <Button type='submit' className='' variant='secondary' style={{flexBasis:'10%'}}>Send</Button>
            </form>
        </div>
    </div>
  )
}

export default Chat