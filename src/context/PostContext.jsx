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
             
            case "UPDATE_CONTENT":
                return {...post,content:payload};   
             
            case "UPDATE_MODAL_CONTENT":
                return {...post,modalContent:payload};    
                
            default:
                return post;    
        }
    }
    const initialState= {
        userPosts:[],
        showPostModal:false,
        content:"",
        modalContent:"",
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

    const createNewPost= async (content)=>
    {
        const encodedToken=localStorage.getItem("token");
        // const post= {content};
        console.log("Yahan se aagge nhi jaa raha hai");
        try {
            const response= await axios.post("/api/posts",{postData: {content}},{headers:{authorization:encodedToken}});
            if(response.status===201)
            {
                console.log("Yay aarah hai",response.data.posts);
                dispatch({type:"ALL_USER_POSTS",payload:response.data.posts});
                dispatch({type:"TOGGLE_POST_MODAL",payload:false});
            }
        }
        catch(error) {
            console.log(error);
        }
    }




    return (
        <PostContext.Provider value={{state,dispatch,getAllUserPosts,createNewPost}}>
            {children}
        </PostContext.Provider>
    )
}