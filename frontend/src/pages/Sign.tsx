import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sign:React.FC=()=>{
    const [email,setEmail] = useState(" ")
    const [password,setPassword] = useState(" ")
    const [error,setError] = useState("")

    const handleSubmit =async (e:React.FormEvent) =>{
        e.preventDefault()
        try {
            const response = axios.post("http://localhost:5000/api/user/login",{email,password})
            localStorage.setItem("token",(await response).data.token)
            window.location.href = "/dashboard"
        } catch (err) {
         setError("message ")   
        }
    }


    return(
        <div className='flex justify-center'>
            {/* {error? <p>{error}</p>: " "} */}
            <form onSubmit={handleSubmit}>
            <h3 className='text-center md:text-3xl text-xl my-3 flex justify-center'>Welcome to login page!</h3>
                <div className='my-4 '>
                    <input type="email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} 
                    className='border outline-none md:w-96 w-72 p-2'
                    />
                </div>
                <div>
                    <input type="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    className='border outline-none md:w-96 w-72 p-2'
                    />
                </div>
                <div className='flex items-center my-3'>
                    <input type="checkbox" className='border'/>
                    <span className='px-1'>Remember me .</span>
                </div>
                <button type="submit" className='border border-orange-400 bg-yellow-300 md:w-96 w-72 text-center text-xl my-4'>submit</button>

                <h2>I don't have account? <Link to="/register" className='text-orange-500'>Register</Link></h2>
            </form>
        </div>
    )
}

export default Sign 
