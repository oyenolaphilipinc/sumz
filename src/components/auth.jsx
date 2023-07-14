import { useState } from 'react'
import { supabase } from './config'
import { Spinner } from 'flowbite-react';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import eyesOpen from '../assets/eyesOpen.svg'
import EyesClosed from '../assets/eyesClosed.svg'
import "./customStyles.css"
export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }
  const handleSee =() => {
    document.querySelector('.textinput').setAttribute('type','password')
    document.querySelector('.containedImages img:nth-child(1)').style.display="none"
    document.querySelector('.containedImages img:nth-child(2)').style.display="inline"

  }
  const handleHide =() => {
    document.querySelector('.textinput').setAttribute('type','text')
    document.querySelector('.containedImages img:nth-child(2)').style.display="none"
    document.querySelector('.containedImages img:nth-child(1)').style.display="inline"

  }
  return (
    <div className='w-[100%] absolute h-[100%] bg-[#1c1c1c]'>
    <form className="flex max-w-md flex-col mx-auto mt-32 gap-4" onSubmit={handleLogin}>
    <div>
      <div className="mb-2 block">
        <Label
        className='text-white font-[1000] text-[20px]'
          htmlFor="email1"
          value="Your email"
        />
      </div>
      <TextInput
        id="email1"
        placeholder="name@flowbite.com"
        type="email"
        value={email}
        className="font-[1000]"
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
        className='text-white font-[1000] text-[20px]'
          htmlFor="password1"
          value="Your password"
        />
      </div>
      <div className="flex">

      <input
        id="password1"
        required
        type="password"
        className='textinput rounded-tl-[10px] rounded-bl-[10px] border-r-0 opacity-100 bg-[#1c1c1c] text-white px-[10px] font-[900] w-[85vw] transition-all duration-1000 '
        />
    <div className="containedImages flex justify-center  h-[45px] w-[10vw] bg-[#1c1c1c] rounded-tr-[10px] rounded-br-[10px] border-l-0">

    <img
      onClick={handleSee}
      src={EyesClosed}
      className="w-[30px] h-[30px] cursor-pointer"
      >
    </img>
    <img
      onClick={handleHide}
      src={eyesOpen}
      className="cursor-pointer"
      >
    </img>
        </div>
    </div>
    </div>
        
    <div className="flex items-center gap-2">
      <Checkbox id="remember" />
      <Label className='text-white font-[1000] ' htmlFor="remember">
        Remember me
      </Label>
    </div>
    <Button className='bg-[#23242A] '  type=" submit">
    {loading ? <Spinner aria-label="Spinner button example" />  : <span className='text-white font-[1000] text-[20px]'>Sign up</span>}
    </Button>

  </form>
  </div>
  )
}
