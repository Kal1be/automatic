import { useState, } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
function Register() {
    const [username,setUsername] = useState(" ")
    const [email,setEmail] = useState(" ")
    const [phone,setPhone] = useState("")
    const [password,setPassword] =useState("")
const navigate = useNavigate()

    const handleSubmit=async (e:React.FormEvent)=>{
      e.preventDefault()
     try {
      const res = await axios.post("http://localhost:5000/api/user/register",{username,email,phone,password})
       const response = res.data

      navigate("/sign")
     } catch (error) {
      console.log("something went wrong !")
      
     }

    }
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center md:text-3xl text-2xl font-bold">Welcome to Register</h2>
        <div className='my-4 '>
          <label>Username</label>
          <input type="text"
           className='border block outline-none md:w-96 w-72 p-2'
          value={username} onChange={(e)=>{
            setUsername(e.target.value)
          }} />
        </div>
        <div className='my-4 '>
          <label htmlFor="">Email</label>
          <input type="text" 
         className='border block outline-none md:w-96 w-72 p-2'
          value={email} onChange={(e)=>{
          setEmail(e.target.value)
          }} />
        </div>
        <div className='my-4 '>
          <label htmlFor="">Phone</label>
          <input type="text" value={phone}
         className='border block outline-none md:w-96 w-72 p-2'
          onChange={(e)=>{
            setPhone(e.target.value)
          }} />
        </div>
        <div className='my-4 '>
          <label htmlFor="">password</label>
          <input type="text" 
         className='border block outline-none md:w-96 w-72 p-2'
          value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} />
        </div>
        <div className="flex items-center">
         <input type="checkbox" />
         <span className="px-2 ">agree our condition</span>
        </div>
        <button className="md:w-96 w-72 p-2 my-3 bg-yellow-300 border border-orange-500" type="submit">Register now</button>
        <h3>No i have account <Link to="/sign" className="text-orange-400">Login</Link></h3>
      </form>
      
    </div>
  )
}

export default Register
