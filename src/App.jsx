import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import Instruction from './pages/Instruction';
import Survey from './pages/Survey';
import UsersName from './pages/UsersName';
import Successfull from './pages/Successfull';
import Rating from './components/Rating';


function App() {

  return (
   <>
   <Routes>
    <Route  path='/' element={<WelcomePage/>} />
    <Route  path='/instruction' element={<Instruction/>} />
    <Route  path='/user' element={<UsersName/>} />
    <Route  path='/survey' element={<Survey/>} />
    <Route  path='/success' element={<Successfull/>} />
    <Route  path='/rating' element={<Rating/>} />
   </Routes>
   </>
  )
}

export default App
