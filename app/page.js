"use client";
import { useState} from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./context/AuthContext";
export default function loginPage() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter();
    const { login } = useAuth();
    return (
        <>
        <div>
        <h1 className="text-4xl font-semibold text-center text-amber-500">LOGIN</h1>

        </div>
        <form className="flex flex-col gap-9 text-center items-center mt-10 ">
            <input type="email" placeholder="Email" required onChange={(event)=>{setemail(event.target.value)}} />
            <input type="password" placeholder="Password" required onChange={(event)=>{setpassword(event.target.value)}}/>

              <button className="text-xl font-bold text-white bg-blue-500 rounded-2xl p-3 hover:bg-blue-600 transition" type="submit" onClick={(event) => {
                //console.log(email, password)
               //localStorage.setItem("email", email);
                //localStorage.setItem("password", password);

                event.preventDefault();
                login(email, password);
                router.push("/dashboard");
                // router.push(`/home?email=${email}&password=${password}`);
                
            }}>Login</button>

        </form>

</>
    )};