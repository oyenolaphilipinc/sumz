import { useState } from 'react'
import { supabase } from './config'
import logo from '../assets/logo.svg'
import { Spinner } from 'flowbite-react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

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

  return (
    <form className="flex max-w-md flex-col mx-auto mt-32 gap-4" onSubmit={handleLogin}>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email1"
          value="Your email"
        />
      </div>
      <TextInput
        id="email1"
        placeholder="name@flowbite.com"
        type="email"
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="password1"
          value="Your password"
        />
      </div>
      <TextInput
        id="password1"
        required
        type="password"
      />
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="remember" />
      <Label htmlFor="remember">
        Remember me
      </Label>
    </div>
    <Button type="submit">
    {loading ? <Spinner aria-label="Spinner button example" />  : <span>Sign up</span>}
    </Button>
  </form>
  )
}