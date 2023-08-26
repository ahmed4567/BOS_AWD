import * as React from 'react';
import { SectionWrapper } from "../hoc"
import {SetingNav} from "../components"
import { useState , useEffect } from 'react';
import axios from 'axios';
import "../dashbord.css"
import { Container } from 'postcss';
const curentDate =  new Date().toLocaleString() + ""

const Admindash = ()=> {
  const  [chartData , setCahrtData] = useState({})

  
  /*useEffect(()=>{
    const fechData = async () =>{
      const {data} = await axios.get("http://localhost:5173/setings/")
      console.log(data) 
      setCahrtData({
        labels : data.data.map((item))
      })
    }
    fechData()
  },[])*/
  return (
    <>
    <div className='flex min-h-[600px] my-2 mx-[5px] gap-2'>
    <SetingNav/>
    <div className=' p-[10px] text-center w-[100%] bg-prussianBlue-950'>
    <div className=' p-[5px] h-[50%]'> 
      <div className='h-full w-[79%] mx-1 inline-block border-solid border-[2px] border-prussianBlue-600'>charts</div>
      <div className='h-full w-[19%] mx-1 inline-block border-solid border-[2px] border-prussianBlue-600'>total sals</div>
    </div>
    <div className='p-[5px] h-[50%]'> 
      <div className='h-full w-[30%] mx-1 inline-block border-solid border-[2px] border-prussianBlue-600'>best selars </div>
      <div className='w-[30%] h-full mx-1 inline-block border-solid border-[2px] border-prussianBlue-600'>daly seals </div>
      <div className='w-[30%] h-full mx-1 inline-block border-solid border-[2px] border-prussianBlue-600'>total sals by amount</div>
      </div>
    </div>
   
    </div>
  </>
  );
}
export default SectionWrapper(Admindash,"Admindash")