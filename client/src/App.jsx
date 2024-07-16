
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Privateroute from './components/Privateroute'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Rightpanel from './components/Rightpanel'
// import { IconContext } from 'react-icons/lib'
function App() {

  return (
    <div className='flex max-w-10xl mx-auto '>


    <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route element={<Privateroute/>}>
      {/* all pvt routess */}
      <Route path='/' element={<Home/>}/>
      

    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
