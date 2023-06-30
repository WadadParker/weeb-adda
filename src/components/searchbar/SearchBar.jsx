import styles from "src/components/searchbar/searchBar.module.css"

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "src/context/PostContext";
import { ProfileContext } from "src/context/ProfileContext";

import {FollowerCard} from "src/components/followerCard/FollowerCard.jsx";

export const SearchBar=()=>
{
    const {state:{allUsers}}=useContext(PostContext);
    const {state:{currentUser,search},dispatch}=useContext(ProfileContext);
    const navigate=useNavigate();

    const suggestedUsers = allUsers.filter(user => !currentUser?.following.some(followedUser => followedUser.username === user.username || user.username===currentUser?.username));
    const searchedUsers=allUsers.filter(({name})=>name.toLowerCase().includes(search.toLowerCase()));

    const clickHandler=(username)=>
    {
        navigate(`/profile/${username}`)
        dispatch({type:"UPDATE_SEARCH",payload:""});
    }
    useEffect(()=>{ 
        window.scrollTo(0, 0)
   },[])

    return (
        <div className={styles[`search-users-container`]}>
            <input type="search" placeholder="search users" value={search} className={styles.input} onChange={(e)=>dispatch({type:"UPDATE_SEARCH",payload:e.target.value})}/>
            <ul className={styles[`suggested-users-list`]}>
                {suggestedUsers?.map((user,index)=>{
                    const {_id}=user;
                    if(index<3)
                    return (
                        <li key={_id}> <FollowerCard user={user}/> </li>
                    )
                })}
            </ul>
            {search.length!==0 && <div className={styles[`searched-users-container`]}>
                {searchedUsers.length===0
                ? <h1 className={styles.noweebs}>No weebs found</h1>
                : searchedUsers?.map(user=>{
                    return (
                        <li key={user?._id} className={styles[`searched-user-list-item`]}>
                            <img alt="pfp" src={user?.avatar} width={80} height={80} className={styles.pfp}/>
                            <strong onClick={()=>clickHandler(user?.username)}>{user?.name}</strong>
                            <span>@{user?.username}</span>
                        </li>
                    )
                })}
            </div>}
        </div>
    )
}