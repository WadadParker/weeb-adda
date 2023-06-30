import { createContext,useState, useReducer,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ProfileContext } from "./ProfileContext";
import { PostContext } from "./PostContext";
import {Avatars} from "src/assets/avatars/Avatars";

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
              
            case "TOGGLE_PASSWORD":
                return {...state,displayPassword:!state.displayPassword};    
            
            case "TOGGLE_CONFIRM_PASSWORD":
                return {...state,displayConfirmPassword:!state.displayConfirmPassword};    

            default:
                return state;    
        }
    }

    const initialState={
        login:{username:"",password:""},
        guest:{username:"wadadparker",password:"wadadparker"},
        signup:{name:"",username:"",email:"",password:"",confirmPassword:""},
        displayPassword:false,
        displayConfirmPassword:false
    }
    const [authState,dispatch]=useReducer(AuthReducer,initialState);

    const loginHandler=async (showToast)=>
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
            showToast("Invalid Credentials!","error");
        }
    }

    const checkAllFields=(showToast)=>
    {
        const {signup:{name,username,email,password,confirmPassword}}=authState;
        if(name==="" || username==="" || email==="" || password==="" || confirmPassword==="")
        {
            showToast("Please enter all fields!!",'warning');
        }
        else {
            signupHanlder(showToast);
        }
    }

    const passwordChecker=()=>
    {
        const {signup:{password,confirmPassword}}=authState;
        if(password===confirmPassword)
        {
            return true;
        }
        else {
            return false;
        }
    }

    const signupHanlder= async (showToast)=>
    {
        if(passwordChecker())
        {
            const {signup}=authState;
            const {username,password,name,email}=signup;
            const {avatar7:avatar}=Avatars;
            try {
                const response= await axios.post("/api/auth/signup",{username,password,name,email,avatar});
                if(response.status===201)
                {
                    setIsLoggedIn(true);
                    profileDispatch({type:"CURRENT_USER",payload:response.data.createdUser});
                    localStorage.setItem("user",response.data.createdUser);
                    localStorage.setItem("token",response.data.encodedToken);
                    getAllUserPosts();
                    getAllUsers();
                    navigate("/home");
                }
            }
            catch(error)
            {
                console.log(error);
            }
        }
        else {
            showToast("Passwords not matching!","error");
        }
    }
    const logoutHandler=()=>
    {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn,authState,dispatch,loginHandler,signupHanlder,logoutHandler,checkAllFields}}>
            {children}
        </AuthContext.Provider>
    )
}