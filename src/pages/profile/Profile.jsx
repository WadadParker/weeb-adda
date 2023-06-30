import styles from "./profile.module.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Sidebar } from "src/components/sidebar/Sidebar";
import { ProfilePage } from "src/components/profilePage/ProfilePage";
import { SearchBar } from "src/components/searchbar/SearchBar";
import { ProfileContext } from "src/context/ProfileContext";
import { PostContext } from "src/context/PostContext";

export const Profile=()=>
{
    const {state}=useContext(ProfileContext);
    const {currentUser}=state;
    const {state:{allUsers},getAllUsers}=useContext(PostContext);

    const {username}=useParams();
    const user=[...allUsers]?.find(({username:searchedUsername})=>searchedUsername===username);

    useEffect(()=>{getAllUsers()},[user?.followers]);
    useEffect(()=>{ 
        window.scrollTo(0, 0)
   },[username]);
   
    return (
        <div className={styles[`profile-container`]}>
        <Sidebar />
        <ProfilePage user={user} isCurrentUser={username===currentUser?.username?true:false}/>
        <SearchBar />
        </div>
    )
}