import { createContext,useState, useReducer,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ProfileContext } from "./ProfileContext";
import { PostContext } from "./PostContext";

export const AuthContext=createContext();

export const AuthProvider=({children})=>
{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const navigate=useNavigate();
    const {dispatch:profileDispatch}=useContext(ProfileContext);
    const {getAllUserPosts,getAllUsers}=useContext(PostContext);

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
        try {
            const response= await axios.post("/api/auth/login",{username,password});
            if(response.status===200)
            {
                setIsLoggedIn(true);
                profileDispatch({type:"CURRENT_USER",payload:response.data.foundUser});
                profileDispatch({type:"BOOKMARKS",payload:response.data.foundUser.bookmarks});
                localStorage.setItem("user",response.data.foundUser);
                localStorage.setItem("token",response.data.encodedToken);
                getAllUserPosts();
                getAllUsers();
                navigate("/home");

            }
        }
        catch(error) {
            console.log(error);
        }
    }

    const signupHanlder= async ()=>
    {
        const {signup}=authState;
        const {username,password,name,email}=signup;
        try {
            const response= await axios.post("/api/auth/signup",{username,password,name,email});
            if(response.status===201)
            {
                setIsLoggedIn(true);
                localStorage.setItem("user",response.data.foundUser);
                localStorage.setItem("token",response.data.encodedToken);
                getAllUserPosts(username);
                navigate("/home");

            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
    const logoutHandler=()=>
    {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn,authState,dispatch,loginHandler,signupHanlder,logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}