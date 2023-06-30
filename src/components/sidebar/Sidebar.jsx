import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faMagnifyingGlass, faBookmark,faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "src/components/sidebar/sideBar.module.css";

import { ProfileCard } from "src/components/profileCard/ProfileCard";
import { PostContext } from "src/context/PostContext";
import {ProfileContext} from "src/context/ProfileContext";

export const Sidebar=()=>
{
    const {dispatch}=useContext(PostContext);
    const {state:{currentUser}}=useContext(ProfileContext);

    return (
        <div className={styles[`sidebar-container`]}>
        <header className={styles[`sidebar-icons-container`]}>
            <FontAwesomeIcon icon={faHouse} />
            <NavLink to="/home" className={({isActive})=>(isActive?styles[`active-link`]:"")}>Home</NavLink>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <NavLink to="/explore" className={({isActive})=>(isActive?styles[`active-link`]:"")}>Explore</NavLink>
            <FontAwesomeIcon icon={faBookmark} />
            <NavLink to="/bookmark" className={({isActive})=>(isActive?styles[`active-link`]:"")}>Bookmark</NavLink>
            <FontAwesomeIcon icon={faUser} />
            <NavLink to={`/profile/${currentUser?.username}`} className={({isActive})=>(isActive?styles[`active-link`]:"")}>Profile</NavLink>
            <button className={styles[`new-post-button`]} onClick={()=>dispatch({type:"TOGGLE_POST_MODAL",payload:true})}>Create New Post</button>
        </header>
        <ProfileCard />
        </div>
    )
}