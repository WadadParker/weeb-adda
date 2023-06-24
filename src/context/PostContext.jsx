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
            
            case "TOGGLE_POST_MODAL":
                return {...post,showPostModal:payload};
                
            default:
                return post;    
        }
    }
    const initialState= {
        userPosts:[],
        showPostModal:false,
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
        <PostContext.Provider value={{state,dispatch,getAllUserPosts}}>
            {children}
        </PostContext.Provider>
    )
}