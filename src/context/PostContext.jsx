import axios from "axios";
import { createContext,useReducer } from "react";

export const PostContext=createContext();

export const PostProvider=({children})=>
{
    const PostReducer=(post,{type,payload})=>
    {
        switch(type)
        {
            case "ALL_USER_POSTS":
                return {...post,userPosts:payload};
            
            default:
                return post;    
        }
    }
    const initialState= {
        userPosts:[],
    }
    const [state,dispatch]=useReducer(PostReducer,initialState);

    const getAllUserPosts= async (username)=>
    {
        try {
            const response=await axios.get(`/api/posts/user/${username}`);
            if(response.status===200)
            {
                console.log("working",response.data.posts);
                dispatch({type:"ALL_USER_POSTS",payload:response.data.posts})
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <PostContext.Provider value={{state,getAllUserPosts}}>
            {children}
        </PostContext.Provider>
    )
}