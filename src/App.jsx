import axios from 'axios';
import {Works,Admindash,Navbar,Docs,Reports,Storeg} from './components';
import { Routes , Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import LogIn from "./pages/login/login";
import Register from "./pages/register/register"
import ForgetPass from "./pages/forget/forget"
const App = () => {
  return (
    <>   
    <provider>
    <div className=' absolute w-screen min-h-[700px] mt-0 bg-secondary -z-50'>
    <div className=" absolute grid grid-cols-2 w-fit h-fit grid-rows-2 left-0 right-0 m-auto animate-spin-slow -z-50">
        <div className=" animate-blob animatinon-delay-4000 w-[300px] h-[300px] bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className=" animate-blob animatinon-delay-2000 w-[300px] h-[300px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className=" animate-blob animatinon-delay-2000 w-[300px] h-[300px] bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className=" animate-blob animatinon-delay-4000 w-[300px] h-[300px] bg-red-500 rounded-full mix-blend-multiply filter blur-xl"></div>
    </div>
        <Routes >
        <Route path='/user/:id'>
            <Route path='home' element={<><Navbar /> <Works /></>}/>
            <Route path='mabeat' element={<><Navbar /> <Works /></>}/>  
            <Route path='foater' element={<><Navbar /> <Works /></>}/>
            <Route path='khazena' element={<><Navbar /> <Works /></>}/>
            <Route path='nhaetElyom' element={<><Navbar /> <Works /></>}/>
            <Route path='personalInfo' element={<><Navbar /> <Works /></>}/>
            <Route path='settings'>
            <Route index element={<><Admindash /></>}/>
            <Route path='docs' element={<><Docs /></>}/>
            <Route path='storeg' element={<><Storeg /></>}/>
            <Route path='clintsData' element={<><Admindash /></>}/>
            <Route path='securety' element={<><Admindash /></>}/>
            <Route path='reports' element={<><Reports /></>}/>
            </Route>
          </Route> 
        
        

        <Route path='/logOut' element={<LogIn />}/>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        
      </Routes>
      </div>
      </provider>
      </>
  )
}

export default App
