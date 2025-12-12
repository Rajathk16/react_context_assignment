"use client";
import { createContext,useContext,useState,useEffect } from "react";
import { useRouter } from "next/navigation";    

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const login = (email, password) => {
        setemail(email);
        setpassword(password);
        // router.push("/dashboard");
    }

    const logout = () => {
        setemail("");
        setpassword("");
    }

    return (
        <AuthContext.Provider value={{email,password, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () =>{return useContext(AuthContext);}