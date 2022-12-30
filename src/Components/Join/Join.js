import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className='d-flex vh-100 border p-5 align-items-center justify-content-center'>
        <form onSubmit={handleJoin}>
            <input type="text" name='name' required/>
            <Button type='submit' variant='success'>Join</Button>
        </form>
    </div>
  )
}

export default Join