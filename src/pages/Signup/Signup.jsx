import React, {useState} from 'react'

import {  useNavigate} from 'react-router-dom'
import {auth} from '../../../firebase/firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'



const SignUp = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const handleCreateAccount = async (e) => {
        e.preventDefault()
       if (email?.trim()?.length > 10 && email?.trim()?.includes('@')  && password?.trim() === confirmPassword?.trim() &&  password?.trim().length > 5 ) {
         const user = await createUserWithEmailAndPassword(auth,email,password)

            if (user?.user?.accessToken) { 
                alert('Account Created Successfully')
            }
       }
    }




  return (
    <div className='bg-[#B3FFAE] flex flex-1 justify-center items-center h-screen'>
    <form
      autoComplete="off"
      className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
      aria-label="signup-form"
    >
      <h2 className="mb-10 text-3xl font-bold text-center">Sign Up An Account</h2>
      <div className="flex flex-col items-start mb-5 gap-y-3">
        <label htmlFor="email" className="text-sm font-medium cursor-pointer">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />
      </div>
      <div className="flex flex-col items-start mb-5 gap-y-3">
        <label
          htmlFor="password"
          className="text-sm font-medium cursor-pointer"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value) }
        />
      </div>
      <div className="flex flex-col items-start mb-5 gap-y-3">
        <label
          htmlFor="password"
          className="text-sm font-medium cursor-pointer"
        >
          Confirm Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Re Enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value) }
        />
      </div>
      <div className="flex flex-col items-start mb-5 gap-y-3">
        <label
          htmlFor="name"
          className="text-sm font-medium cursor-pointer"
        >
          Display Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value) }
        />
      </div>
      <div className="flex items-center justify-end mb-5 text-slate-400">
        <p>Already have an account?</p>
        <p 
        onClick={() => navigate('/login')}
          className="text-blue-500 underline">
          Sign In
        </p>
      </div>
      <button
        onClick={(e) => handleCreateAccount(e)}
        type="submit"
        className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        Create an account
      </button>
    </form>
  </div>
  )
}

export default SignUp