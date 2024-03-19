import "./navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Navbar() {
  const [ open,setOpen] = useState(false)
    const authUser =false
  return (
    <div className='flex py-2 z-50 sticky top-0 lg:px-6 md:px-4 px-2 items-center justify-between h-full w-full  bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 border-b border-b-gray-300'>
      <div className='flex bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 px-3 md:gap-2 gap-1 items-center '>
      <img src="./icon1.jpg" className='md:w-12 md:h-12 w-10 h-10 rounded-full' alt="" />
      <h2 className='title font-medium'>Automatic <span className='text-orange-400'>Pro</span></h2>
      </div>
      <div className='flex'>
        <FontAwesomeIcon icon={faBars} className='px-3 text-2xl' id='my-icon' onClick={()=>{
          setOpen(!open)
        }}/>
        <ul className='md:flex items-center gap-8 lg:gap-16 px-3 text-black font-medium text-md' id={open?"nav":"hidden"}>
          <FontAwesomeIcon icon={faClose} id="my-icon" className="absolute right-3 text-xl p-3" onClick={()=>{
            setOpen(!open)
          }}/>
            <li onClick={()=>{
              setOpen(!open)
            }}>
                <Link to="/">Home</Link>
            </li>
           <li  onClick={()=>{
              setOpen(!open)
            }} >
                <Link to="/profile">My Profile</Link>
             </li>
            <li  onClick={()=>{
              setOpen(!open)
            }}>
                <Link to="/service">Services</Link>
            </li>
            <li  onClick={()=>{
              setOpen(!open)
            }}>
                <Link to="/document">Document</Link>
            </li>
           {authUser && (
              <li  onClick={()=>{
                setOpen(!open)
              }}>
                <Link to="/admin">Admin</Link>
              </li>
            
           )}
            {/* <li className='my-element py-1 px-2 rounded-2xl '>Signup</li> */}
           {
            authUser? " ": <li className='my-element text-center py-1 px-3  bg-yellow-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border text-gray-900'  onClick={()=>{
              setOpen(!open)
            }}>
            <Link to="/sign">Sign In</Link>
        </li>
           }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
