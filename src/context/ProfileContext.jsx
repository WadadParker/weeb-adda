import { createContext,useReducer } from "react";
import axios from "axios";

export const ProfileContext=createContext();

export const ProfileProvider=({children})=>
{
    const ProfileReducer=(profile,{type,payload,inputField})=>
    {
        const {currentUser}=profile;
        switch(type){
            case "CURRENT_USER":
                return {...profile,currentUser:payload};

            case "TOGGLE_MODAL":
                return {...profile,showModal:payload};    

            case "OPEN_EDIT_PROFILE":
                return {...profile,editProfile:{avatar:currentUser.avatar,bio:currentUser.bio,websiteLink:currentUser.website},showModal:true};
            
            case "EDIT_PROFILE_FIELDS":
                return {...profile,editProfile:{...profile.editProfile,[inputField]:payload}};    
                 

            default:
                return profile;    
        }
    }

    const initialState={
        currentUser:{},
        showModal:false,
        editProfile:{avatar:"",bio:"",websiteLink:""},
    }

    const [state,dispatch]=useReducer(ProfileReducer,initialState);

    const editUserProfile=async ()=>
    {
        const {currentUser,editProfile}=state;
        const userData={...currentUser,avatar:editProfile?.avatar,bio:editProfile?.bio,website:editProfile?.websiteLink};
        const encodedToken=localStorage.getItem("token");
        try {
            const response=await axios.post(`/api/users/edit`,{userData},{headers: { authorization: encodedToken }});
            if(response.status===201)
            {
                dispatch({type:"CURRENT_USER",payload:response.data.user});
                dispatch({type:"TOGGLE_MODAL",payload:false});
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <ProfileContext.Provider value={{state,dispatch,editUserProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}