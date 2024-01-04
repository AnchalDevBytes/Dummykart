"use client"
import { login } from "@/lib/features/authSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {

    const [user, setUser] = useState({
        email:" ",
        password: " ",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const dispatch = useDispatch();

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/login", user);
            dispatch(login(response.userData));
            router.replace("/")
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    },[user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 py-2 gap-2">
        <h1 className="text-xl font-bold tracking-widest text-slate-800">
          {loading ? "...loading..." : "Login"}
        </h1>
        <hr />
        <div className="flex items-center justify-between gap-5 bg-slate-700 min-w-[30vw] pl-5 rounded-md">
          <label htmlFor="email" className="text-slate-300">email</label>
          <input
            className="px-4 py-2 rounded-r-md bg-slate-500 text-white"
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="enter the email"
          />
        </div>
        <div className="flex items-center justify-between gap-5 bg-slate-700 min-w-[30vw] pl-5 rounded-md">
          <label htmlFor="password" className="text-slate-300">password</label>
          <input
            className="px-4 py-2 rounded-r-md bg-slate-500 text-white"
            type="text"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="enter the password"
          />
        </div>
        <button
          onClick={onLogin}
          className="px-3 py-[7px] hover:bg-sky-500/80 active:bg-sky-600/70 transition-all bg-sky-600 rounded-md text-slate-300"
        >
          {buttonDisabled ? "no login" : "login"}
        </button>
        <div>
          Don&apos;t have an accunt?
          <Link href="/signup">
            <span className="text-sky-600 ">Signup</span>
          </Link>
        </div>
      </div>
    );
}

export default LoginPage;