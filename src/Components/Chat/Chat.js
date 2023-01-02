
import React, { useEffect, useState } from 'react'
import { user } from '../Join/Join';
import socketIO from 'socket.io-client';
import ChatMessage from '../ChatMessage/ChatMessage';
import ScrollToBottom from 'react-scroll-to-bottom';
import logo from '../../images/logo.png'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom';
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
     socket = socketIO("https://chat-app-server-production-042a.up.railway.app/",{transports:['websocket']})
        socket.on('connect',()=>{
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
    <div className='w-75 mx-auto h-100 border mt-5 shadow'>
        <div className='border-bottom header d-flex justify-content-between align-items-center px-3' style={{height:'60px'}}>
            
                <img src={logo} className='logo' alt="" />
            <Link to='/'><RxCross2 style={{cursor:'pointer',color:'green'}}/></Link>
        </div>
        <ScrollToBottom className='chatBox'>
            {messages.map((message,idx)=><ChatMessage key={idx} message={message.message} user ={message.id===id?'':message.user} cls={message.id===id?'right':'left'}/>)}
        </ScrollToBottom>
        <div className='w-100 bg-secondary '>
            <form onSubmit={handleSend} className='d-flex justify-content-between' style={{height:'50px'}}>
            <input placeholder='Write Message' name='message' className='p-1 px-3 h-100 border-0 border-top' style={{outline:'none',flexBasis:'80%',height:'100%'}}/>
            <button type='submit' className='border-0 bg-success text-white'  style={{flexBasis:'20%'}}>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Chat