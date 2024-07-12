
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
function App() {

  return (
    <div className='flex max-w-10xl mx-auto '>

    <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
