import { createContext,useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>
{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
        <AuthContext.Provider value={{isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}