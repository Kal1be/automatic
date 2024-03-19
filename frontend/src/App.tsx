
import './App.css'
import { Route,Routes,} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './navbar/Navbar'
import Sign from './pages/Sign'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Register from "./pages/Register"
import Footer from './footer/Footer'


const App:React.FC=()=> {
  const isAuthenticated = false;
  return (
 <div>
  <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/sign' element={<Sign/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/register' element={<Register/>}/>
     {isAuthenticated?<Route path="/dashboard" Component={Dashboard} /> :
     <Route path='/sign' element={<Sign/>}/>}
   </Routes>
   <Footer/>
 </div>
  )
}



export default App
