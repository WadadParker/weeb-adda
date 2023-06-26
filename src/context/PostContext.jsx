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
              
            case "EDIT_POST":
                return {...post,modalContent:payload?.content ,showPostModal:true,currentPost:payload?.currentPost,editPostFlag:true};    
              
            case "UPDATE_POST":
                return {...post,userPosts:payload ,modalContent:"",showPostModal:false,editPostFlag:false}    
                
            default:
                return post;    
        }
    }
    const initialState= {
        userPosts:[],
        showPostModal:false,
        content:"",
        modalContent:"",
        currentPost:"",
        editPostFlag:false,
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
        try {
            const response= await axios.post("/api/posts",{postData: {content}},{headers:{authorization:encodedToken}});
            if(response.status===201)
            {
                dispatch({type:"ALL_USER_POSTS",payload:response.data.posts});
                dispatch({type:"TOGGLE_POST_MODAL",payload:false});
            }
        }
        catch(error) {
            console.log(error);
        }
    }
    const editPost= async (content) =>
    {
        const encodedToken=localStorage.getItem("token");
        const {currentPost}=state;
        const postData={...currentPost,content:content};
        try {
            const response=await axios.post(`/api/posts/edit/${currentPost?._id}`,{postData},{headers:{authorization:encodedToken}})
            if(response.status===201)
            {
                dispatch({type:"UPDATE_POST",payload:response.data.posts});
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const deletePost= async(postId)=>
    {
        const encodedToken=localStorage.getItem("token");
        try {
            const response=await axios.delete(`/api/posts/${postId}`,{headers:{authorization:encodedToken}},{});
            if(response.status===201)
            {
                dispatch({type:"ALL_USER_POSTS",payload:response.data.posts});
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    const likePost= async(postId)=>
    {
        const encodedToken=localStorage.getItem("token");
        try {
            const response=await axios.post(`/api/posts/like/${postId}`,{},{headers:{authorization:encodedToken}});
            if(response.status===201)
            {
                dispatch({type:"ALL_USER_POSTS",payload:response.data.posts});
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    const dislikePost= async(postId)=>
    {
        const encodedToken=localStorage.getItem("token");
        try {
            const response=await axios.post(`/api/posts/dislike/${postId}`,{},{headers:{authorization:encodedToken}});
            if(response.status===201)
            {
                dispatch({type:"ALL_USER_POSTS",payload:response.data.posts});
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    const foundIfLiked=(likedByList,CurrentUsername)=> [...likedByList].find(({username})=>username===CurrentUsername);
    


    return (
        <PostContext.Provider value={{state,dispatch,getAllUserPosts,createNewPost,editPost,deletePost,likePost,dislikePost,foundIfLiked}}>
            {children}
        </PostContext.Provider>
    )
}