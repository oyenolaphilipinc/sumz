'use client';
import React from 'react'
import icon from "../assets/favicon.ico"
import { supabase } from './config'
import "./customStyles.css";
import { useState } from 'react';
import { Card, Dropdown, Navbar } from 'flowbite-react';
import  togglewhite  from '../assets/togglewhite.svg'
import  toggleblack  from '../assets/toggleblack.svg'
export default function Account() {


  const [Theme,setTheme] = useState("bg-[#1c1c1c]")
  const [src,setSrc] = useState(toggleblack)
  const [rotate,setRotate] = useState("rotate-[90deg] bg-white rounded-[20px]")
  const changeBgColor = () => {
      if (Theme === "bg-[#1c1c1c]"){
        setTheme("bg-white")
        setSrc(togglewhite)
        setRotate("rotate-[-90deg] bg-black rounded-[20px]")
        
      }else{
        setTheme("bg-[#1c1c1c]")
        setSrc(toggleblack)
        setRotate("rotate-[90deg] bg-white rounded-[20px]")
      }
  }

  

  return (
    <div className={` w-[100%] overflow-hidden 
    ${Theme} text-white mx-auto transition-colors duration-700 ease-in
    min-h-[120vh] 
     px-[5vw]`}
     >
      
    <div className=''>
    <Navbar
      
      className="border w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 
      transition-all ease-in duration-0.6s
      bg-[#23242a]  z-10 border-none  border-gray-100  top-0 
      rounded-bl-[10px] rounded-br-[10px] mx-auto fixed left-[calc((100%-300px)/2)] sm:left-[calc((100%-350px)/2)] md:left-[calc((100%-400px)/2)] xl:left-[calc((100%-500px)/2)] lg:left-[calc((100%-450px)/2)]
      "
    >
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src={icon}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sumz
        </span>
      </Navbar.Brand>
      <div className="flex transition-all ease-in duration-0.6s ">
        <Dropdown className='m-0 p-o'
          inline
          label={<img alt="User settings" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="  rounded-full   h-10 w-10"/>}
        >
          <Dropdown.Header
          className='transition-all ease-in duration-0.6s'
          >
            <span className="block text-sm  font-[800]">
              Oyenola Philip
            </span>
            
            
            <span className="block text-sm truncate  font-[800]">
                Oyenolaphilip89@gmail.com
            </span>
            </Dropdown.Header>
          <a href="/account" >
          <Dropdown.Item >
            Settings
          </Dropdown.Item>
          </a>
          <Dropdown.Divider/>
          <Dropdown.Item type="button" onClick={() => supabase.auth.signOut()}>
            Sign out
          </Dropdown.Item>
          
          
        </Dropdown>
        <Navbar.Toggle />
      </div>
      



      <Navbar.Collapse className='
      md:font-[900]
      fixed font-[900] top-[8vh] 
      transition-all ease-in duration-0.6s
      md:top-[20px] xl:top-[20px] lg:top-[20px]
      left-[calc((100%-365px)/2)] md:left-[calc((100%-220px)/2)] lg:left-[calc((100%-220px)/2)] xl:left-[calc((100%-250px)/2)]
      '>
        <Navbar.Link
          active
        className='
        text-[20px] xl:mr-[30px] md:mr-[30px] text-white 
        md:w-2 lg:w-2 xl:w-2 w-[365px] font-[1000]'
        href="#"

        >
            Home
        </Navbar.Link >
        <Navbar.Link
        className='
        sm:bg-[#23242a]
        text-[20px]
        bg-[#23242a] md:mr-[50px] xl:mr-[50px]
          cursor-pointer w-[365px]
        hover:text-[#1c1c1c] md:w-2 xl:w-2
        text-white font-[1000] opacity-100'
        href="/account">
          Settings
        </Navbar.Link>
        <Navbar.Link 
        className='bg-[#23242a] md:w-2 xl:w-2 md:mr-[40px] xl:mr-[50px]
         cursor-pointer w-[365px] text-white
       hover:text-[#1c1c1c] text-[20px] font-[1000]          
         opacity-100'
        href="/pricing">
          Pricing
        </Navbar.Link>
        <Navbar.Brand
        className='bg-[#23242a] hidden  xl:inline lg:inline md:inline md:w-[30px]  xl:w-[30px]
        translate-y-[5px]
         cursor-pointer text-white
       hover:text-[#1c1c1c]         
         opacity-100
         '
         onClick={changeBgColor}>
            <div className=" transition-all duration-700 ease-in">
                  <img  src={src} className={`${rotate}`}></img>
            </div>
        </Navbar.Brand>
      </Navbar.Collapse>
    
    </Navbar>
    <div className="mt-[12vh] border relative w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[400px]  left-[calc((100%-300px)/2)] sm:left-[calc((100%-350px)/2)] md:left-[calc((100%-400px)/2)] bg-[#23242a]  border-t-white py-12 flex justify-around">
        <h1 className="text-2xl  text-white-900 font-[800]">Dashboard</h1>
        <a href="/summarize">
        <button className="border border-white bg-black text-white px-4 py-1.5 rounded-xl font-bold hover:bg-white hover:text-black  hover:border-black">Summarize</button>
        </a>
    </div>
    <div className="
      left-[calc((100%-300px)/2)] sm:left-[calc((100%-350px)/2)] md:left-[calc((100%-400px)/2)] xl:left-[calc((100%-400px)/2)] lg:left-[calc((100%-400px)/2)]
    mt-6  relative 
    rounded-tr-[20px] rounded-tl-[20px]
    rounded-br-[10px] rounded-bl-[10px]
    overflow-hidden w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[400px]
    bg-[black] h-[511px]  ">
    <div className="borderLine"></div>
    <div className="borderLine2"></div>
        <Card className="
        h-[509px]
         translate-y-[-48px]
        rounded-tl-[15px] mt-[55px]  
        bg-[#23242a] mx-[3px]
        rounded-tr-[15px]">
            <h1 className="text-center sm:text-[15px] text-[15px] md-[15px]  xl:text-[15px] lg-[15px] transition duration-[0.5s] ease-in  text-white-700 font-bold">Summarize easily with the power of AI</h1>
            <img src="https://app.dub.sh/_static/illustrations/shopping-call.svg" height={350} width={370} className="mx-auto"/>
            <a href="/summarize" className="border  bg-black border-white text-white rounded-xl mx-auto px-10 py-1.5 font-bold hover:border-black hover:bg-white hover:text-black">Summarize now</a>
            <a href="/add-a-link" className="text-center text-sm text-white-700 font-bold hover:text-[grey]-400">Summarize a pdf</a>
        </Card>
    </div>
    </div>
    </div>
    
  )
}


