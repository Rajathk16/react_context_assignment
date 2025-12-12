"use client";
import { useState,useEffect, use } from "react";
import { useAuth } from "../context/AuthContext";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function HomePage() {
  // const searchParams=useSearchParams();
  // const[email,setemail]=useState("");
  // const[password,setpassword]=useState("");
  // useEffect(()=>{
  //  // alert(searchParams.get("email"));
  //   setemail(searchParams.get("email"));
  //   setpassword(searchParams.get("password"));
  // },[]);
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");

    // useEffect(() => {
    //     setemail(localStorage.getItem("email"));
    //     setpassword(localStorage.getItem("password"));
    // }, []);

   const { email, password } = useAuth();
   const router=useRouter();
  return (<>
    <div className="text-center space-y-9">
      <h1 className="font-semibold text-4xl text-red-500">Welcome to the profile Page</h1>
        <p  className="text-xl font-bold text-white" >Your email: {email}</p>
        <p className="text-xl font-bold text-white">Your password: {password}</p>
    <button  className="text-xl font-bold text-white bg-blue-500 rounded-2xl p-3 hover:bg-blue-600 transition" onClick={(event)=>{router.push("/edit")}}>edit profile</button>    
    </div>

    {console.log({email})}
    </>
  );
}