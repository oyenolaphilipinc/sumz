'use client';
import React from 'react'
import icon from "../assets/favicon.ico"
import { supabase } from './config'

import { Card, Dropdown, Navbar } from 'flowbite-react';

export default function Account() {
  return (
    <div>
    <Navbar
      fluid
      rounded
      className="border border-2 border-t-white border-x-white border-b-gray-100 w-full fixed top-0"
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
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<img alt="User settings" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="rounded-full h-10 w-10"/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Oyenola Philip
            </span>
            <span className="block truncate text-sm font-medium">
                oyenolaphilip89@gmail.com
            </span>
          </Dropdown.Header>
          <a href="/account">
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          </a>
          <Dropdown.Divider />
          <Dropdown.Item type="button" onClick={() => supabase.auth.signOut()}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="/account">
          Settings
        </Navbar.Link>
        <Navbar.Link href="/pricing">
          Pricing
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div className="mt-16 border border-2 w-full fixed border-t-white py-12 flex justify-around top-0">
        <h1 className="text-2xl text-gray-700">Dashboard</h1>
        <a href="/summarize">
        <button className="border border-2 border-white bg-black text-white px-4 py-1.5 rounded-lg font-bold hover:bg-white hover:text-black hover:border-black">Summarize</button>
        </a>
    </div>
    <div className="mt-52 bg-gray-50 w-full fixed">
        <Card className="mt-12 mx-auto w-[20rem] mb-8 xl:w-[70rem] lg:w-[50rem] md:w-[40rem] sm:w-[40rem]">
            <h1 className="text-center text-xl text-gray-700 font-bold">Summarize easily with the power of AI</h1>
            <img src="https://app.dub.sh/_static/illustrations/shopping-call.svg" height={350} width={370} className="mx-auto"/>
            <a href="/summarize" className="border border-2 bg-black border-white text-white rounded-lg mx-auto px-10 py-1.5 font-bold hover:border-black hover:bg-white hover:text-black">Summarize now</a>
            <a href="/add-a-link" className="text-center text-sm text-gray-700 font-bold hover:text-gray-400">Summarize a pdf</a>
        </Card>
    </div>
    </div>
  )
}


