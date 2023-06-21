import { createContext,useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext=createContext();

export const AuthProvider=({children})=>
{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const navigate=useNavigate();

    const AuthReducer=(state,{type,payload,inputField})=>
    {
        const {login,guest,signup}=state;
        switch(type)
        {
            case "LOGIN_FIELDS":
                return {...state,login:{...login,[inputField]:payload}};
             
            case "GUEST_LOGIN":
                return {...state,login:guest};    
              
            case "SIGNUP_FIELDS":
                return {...state,signup:{...signup,[inputField]:payload}}   
            
            default:
                return state;    
        }
    }

    const initialState={
        login:{username:"",password:""},
        guest:{username:"wadadparker",password:"wadadparker"},
        signup:{name:"",username:"",email:"",password:"",confirmPassword:""},
    }
    const [authState,dispatch]=useReducer(AuthReducer,initialState);

    const loginHandler=async ()=>
    {
        const {login}=authState;
        const {username,password}=login
        console.log(username,password);
        try {
            const response= await axios.post("/api/auth/login",{username,password});
            if(response.status===200)
            {
                setIsLoggedIn(true);
                localStorage.setItem("user",response.data.foundUser);
                localStorage.setItem("token",response.data.encodedToken);
                navigate("/home");

            }
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{isLoggedIn,authState,dispatch,loginHandler}}>
            {children}
        </AuthContext.Provider>
    )
}