"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignupPage = () => {
    const [user, setUser] = useState({
        email:" ",
        username:" ",
        password:" ",
    })

    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/signup", user)
            console.log("Signup successfully", response.data);
            router.push("/login")
        } catch (error) {
            console.log("error during signup" +error);
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(user.email.length >0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    },[user])

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 gap-2'>
        <h1 className="text-xl font-bold tracking-widest text-slate-800">{loading ? "...loding..." : "Signup"}</h1>
        <hr />
        <div className='flex items-center justify-between gap-5 bg-slate-700 min-w-[30vw] pl-5 rounded-md'>
          <label htmlFor='username' className="text-slate-300">username</label>
          <input
            className='px-4 py-2 rounded-r-md bg-slate-500 text-white'
            type='text'
            id='username'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder='enter the username'
          />
        </div>
        <div className='flex items-center justify-between gap-5 bg-slate-700 min-w-[30vw] pl-5 rounded-md'>
          <label htmlFor='email' className="text-slate-300">email</label>
          <input
            className='px-4 py-2 rounded-r-md bg-slate-500 text-white'
            type='email'
            id='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='enter the email'
          />
        </div>
        <div className='flex items-center justify-between gap-5 bg-slate-700 min-w-[30vw] pl-5 rounded-md'>
          <label htmlFor='password' className="text-slate-300">password</label>
          <input
            className='px-4 py-2 rounded-r-md bg-slate-500 text-white'
            type='text'
            id='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='enter the password'
          />
        </div>
        <button
          onClick={onSignup}
          className="px-3 py-[7px] hover:bg-sky-500/80 active:bg-sky-600/70 transition-all bg-sky-600 rounded-md text-slate-300"
        >{buttonDisabled ? "no signup" : "signup"}</button>
        <div>Already have an accunt? <Link href="/login"><span className="text-sky-600 ">Login</span></Link></div>
      </div>
    );
}

export default SignupPage;