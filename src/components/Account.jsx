'use client';
import React from 'react'
import icon from "../assets/favicon.ico"
import { supabase } from './config'
import "./customStyles.css";

import { Card, Dropdown, Navbar } from 'flowbite-react';

export default function Account() {
  return (
    <div className='containBody px-[5vw]'>
      
    <div className=''>
    <Navbar
      fluid
      className="border nav bg-[#23242a]  z-10 border-none  border-gray-100 w-[90vw] fixed top-0"
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
      <div className="flex join  ">
        <Dropdown className='dropdown   m-0 p-o'
          inline
          label={<img alt="User settings" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="  rounded-full   h-10 w-10"/>}
        >
          <Dropdown.Header
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
      
      <Navbar.Collapse className='hang  resize'>
        <Navbar.Link
          active
        className='text-[15px] text-white font-[1000]'
          href="#"
        >
            Home
        </Navbar.Link >
        <Navbar.Link
        className='color text-[15px] hover:text-[#1c1c1c] text-white font-[1000] opacity-100'
        href="/account">
          Settings
        </Navbar.Link>
        <Navbar.Link 
        className='color text-white hover:text-[#1c1c1c] text-[15px] mt-[-1px] font-[1000] opacity-100'
        href="/pricing">
          Pricing
        </Navbar.Link>
      </Navbar.Collapse>
    
    </Navbar>
    <div className="mt-[12vh] border  w-[90vw] bg-[#23242a]  border-t-white py-12 flex justify-around">
        <h1 className="text-2xl  text-white-900 font-[800]">Dashboard</h1>
        <a href="/summarize">
        <button className="border border-white bg-black text-white px-4 py-1.5 rounded-lg font-bold hover:bg-white hover:text-black  hover:border-black">Summarize</button>
        </a>
    </div>
    <div className="mt-6  relative anim bg-[black] br3  h-[80vh]  ">
    <div className="borderLine"></div>
    <div className="borderLine2"></div>
        <Card className="pushdown br2 mt-[55px]  bg-[#23242a] mx-[5px]    h-[79vh]  ">
            <h1 className="text-center sm:text-[20px] xs:text-[10px]  xl:text-[20px]  smooth  text-white-700 font-bold">Summarize easily with the power of AI</h1>
            <img src="https://app.dub.sh/_static/illustrations/shopping-call.svg" height={350} width={370} className="mx-auto"/>
            <a href="/summarize" className="border  bg-black border-white text-white rounded-lg mx-auto px-10 py-1.5 font-bold hover:border-black hover:bg-white hover:text-black">Summarize now</a>
            <a href="/add-a-link" className="text-center text-sm text-white-700 font-bold hover:text-[grey]-400">Summarize a pdf</a>
        </Card>
    </div>
    </div>
    </div>
    
  )
}


