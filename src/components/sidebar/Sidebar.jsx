import { Link, NavLink,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faMagnifyingGlass, faBookmark,faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "src/assets/one-piece-logo.jpg";

import styles from "src/components/sidebar/sideBar.module.css";

import { ProfileCard } from "src/components/profileCard/ProfileCard";
import { PostContext } from "src/context/PostContext";
import {ProfileContext} from "src/context/ProfileContext";

export const Sidebar=()=>
{
    const {dispatch}=useContext(PostContext);
    const {state:{currentUser}}=useContext(ProfileContext);
    const navigate=useNavigate();

    return (
        <div className={styles[`sidebar-container`]}>
        <header className={styles[`sidebar-icons-container`]}>
            <NavLink to="/home" className={({isActive})=>(isActive?styles[`icon-active-link`]:"")}>
                <FontAwesomeIcon icon={faHouse} onClick={()=>navigate("/home")} className={styles.icon} />
            </NavLink>
            <NavLink to="/home" className={({isActive})=>(isActive?styles[`active-link`]:styles.link)}>Home</NavLink>

            <NavLink to="/explore" className={({isActive})=>(isActive?styles[`icon-active-link`]:"")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>navigate("/explore")} className={styles.icon} />
            </NavLink>
            <NavLink to="/explore" className={({isActive})=>(isActive?styles[`active-link`]:styles.link)}>Explore</NavLink>

            <NavLink to="/bookmark" className={({isActive})=>(isActive?styles[`icon-active-link`]:"")}>
            <FontAwesomeIcon icon={faBookmark} onClick={()=>navigate("/bookmark")} className={styles.icon} />
            </NavLink>
            <NavLink to="/bookmark" className={({isActive})=>(isActive?styles[`active-link`]:styles.link)}>Bookmark</NavLink>

            <NavLink to={`/profile/${currentUser?.username}`} className={({isActive})=>(isActive?styles[`icon-active-link`]:"")}>
            <FontAwesomeIcon icon={faUser} onClick={()=>navigate(`/profile/${currentUser?.username}`)} className={styles.icon} />
            </NavLink>
            <NavLink to={`/profile/${currentUser?.username}`} className={({isActive})=>(isActive?styles[`active-link`]:styles.link)}>Profile</NavLink>

            <button className={styles[`new-post-button`]} onClick={()=>dispatch({type:"TOGGLE_POST_MODAL",payload:true})}>
                <span className={styles[`button-text`]}>Create New Post</span>
                <img className={styles[`button-image`]} alt='create new post' src={logo} width={50} height={50} />
                </button>
        </header>
        <ProfileCard />
        </div>
    )
}