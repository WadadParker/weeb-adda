import { createContext,useReducer } from "react";

export const ProfileContext=createContext();

export const ProfileProvider=({children})=>
{
    const ProfileReducer=(profile,{type,payload})=>
    {
        switch(type){
            case "CURRENT_USER":
                return {...profile,currentUser:payload};

            case "TOGGLE_MODAL":
                console.log("working",payload,profile.showModal);
                return {...profile,showModal:payload};    

            default:
                return profile;    
        }
    }

    const initialState={
        currentUser:{},
        showModal:false,
    }

    const [state,dispatch]=useReducer(ProfileReducer,initialState)

    return (
        <ProfileContext.Provider value={{state,dispatch}}>
            {children}
        </ProfileContext.Provider>
    )
}