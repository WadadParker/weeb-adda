import { createContext,useReducer } from "react";

export const ProfileContext=createContext();

export const ProfileProvider=({children})=>
{
    const ProfileReducer=(profile,{type,payload})=>
    {
        switch(type){
            case "CURRENT_USER":
                return {...profile,currentUser:payload};
            default:
                return profile;    
        }
    }

    const initialState={
        currentUser:{},
    }

    const [state,dispatch]=useReducer(ProfileReducer,initialState)

    return (
        <ProfileContext.Provider value={{state,dispatch}}>
            {children}
        </ProfileContext.Provider>
    )
}