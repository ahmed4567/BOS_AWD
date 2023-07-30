import axios from 'axios';
import {Navbar,Works,Serchbar,Admindash} from './components';
import { Routes , Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Login } from "./pages/login/index";
const App = () => {
  return (
    <>   
    <div className=' absolute w-screen h-screen overflow-auto	 mt-0 bg-secondary -z-50'>
    <div className=" absolute grid grid-cols-2 grid-rows-2 left-[25%] animate-spin-slow -z-50">
        <div className=" animate-blob animatinon-delay-4000 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className=" animate-blob animatinon-delay-2000 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className=" animate-blob animatinon-delay-2000 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className=" animate-blob animatinon-delay-4000 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl"></div>
    </div>
    <Navbar />
    
        <Routes >
        <Route path='/home' element={<Works />}/>
        <Route path='/mabeat' element={<Works />}/>  
        <Route path='/foater' element={<Works />}/>
        <Route path='/khazena' element={<Works />}/>
        <Route path='/nhaetElyom' element={<Works />}/>
        <Route path='/setings' element={<Admindash />}/>
        <Route path='/personalInfo' element={<Works />}/>
        <Route path='/logOut' element={<Login />}/>
        <Route path="/login" element={<Login />} />
       
      </Routes>
      </div>
     
      </>
  )
}

export default App
