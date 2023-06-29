import styles from "src/components/searchbar/searchBar.module.css"

import { useContext } from "react";
import { PostContext } from "src/context/PostContext";
import { ProfileContext } from "src/context/ProfileContext";

import {FollowerCard} from "src/components/followerCard/FollowerCard.jsx";

export const SearchBar=()=>
{
    const {state:{allUsers}}=useContext(PostContext);
    const {state:{currentUser}}=useContext(ProfileContext);

    const suggestedUsers = allUsers.filter(user => !currentUser?.following.some(followedUser => followedUser.username === user.username || user.username===currentUser?.username));


    return (
        <div className={styles[`search-users-container`]}>
            <input type="search" placeholder="search users" className={styles.input}/>
            <ul className={styles[`suggested-users-list`]}>
                {suggestedUsers?.map((user,index)=>{
                    const {_id}=user;
                    if(index<3)
                    return (
                        <li key={_id}> <FollowerCard user={user}/> </li>
                    )
                })}
            </ul>
        </div>
    )
}