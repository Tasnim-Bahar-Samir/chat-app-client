import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'

export let user;
const Join = () => {
    const navigate = useNavigate()
    const handleJoin = (e)=>{
        e.preventDefault()
        user = e.target.name.value;
        console.log(user)
        navigate('/chat')
    }
  return (
    <div className='d-flex vh-100 align-items-center justify-content-center'>
        <form onSubmit={handleJoin} style={{width:'400px'}} className='border border-3 px-5'>
            <div className='join-logo' >
            <img className='' src={logo} alt="" />
            </div>
            <input type="text" name='name' placeholder='Name' className='form-control d-block' required/>
            <Button type='submit' className='w-100 my-4' variant='success'>Join</Button>
        </form>
    </div>
  )
}

export default Join