import styles from "/src/components/profileCard/profileCard.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";
import { AuthContext } from "src/context/AuthContext";

export const ProfileCard=()=>
{
    const navigate=useNavigate();
    const [showLogout,setShowLogout]=useState(false);
    const {logoutHandler}=useContext(AuthContext);
    const {state}=useContext(ProfileContext);
    const {currentUser}=state;

    const clickHandler=()=>
    {
        setShowLogout(false);
        logoutHandler();
    }

    return (
        <div className={styles[`profile-card`]}>
            <img className={styles[`profile-img`]} src={currentUser?.avatar} 
            alt=""
            width={76}
            height={76}/>
            <header className={styles['profile-card-header']} onClick={()=>navigate(`/profile/${currentUser?.username}`)}>
                <strong>{currentUser?.name}</strong>
                <span>@{currentUser?.username}</span>
            </header>
            <footer className={styles.footer}>
                {showLogout && <div className={styles[`logout-container`]}>
                    <span className={styles.logout} onClick={()=>clickHandler()}>Logout</span>
                    <span className={styles.close} onClick={()=>setShowLogout(false)}>Close</span>
                </div>}
                <FontAwesomeIcon icon={faEllipsis} className={styles.ellipsis} onClick={()=>setShowLogout(true)}/>
            </footer>
        </div>
    )
}