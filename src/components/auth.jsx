import { useState } from 'react'
import { supabase } from './config'
import logo from '../assets/logo.svg'

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
    <div className="header flex flex-col items-center mt-16">
      <div className="header">
        <img 
        className="text-2xl mb-2 ml-16"
        src={logo}
        alt={"Sumz Logo"}
        height={150}
        width={150}
         />
         <h2 className="text-center font-bold text-xl">Sign Up</h2>
        <p className="description mt-2 mb-2 text-gray-800">Sign in via magic link with your email below</p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField border border-2 px-4 py-2 border-blue-500 rounded-lg outline-none"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block border border-2 mt-3 px-[5.2rem] py-3 bg-blue-600 text-white rounded-lg'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}