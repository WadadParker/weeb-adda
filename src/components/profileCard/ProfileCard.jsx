import styles from "/src/components/profileCard/profileCard.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";

export const ProfileCard=()=>
{
    const navigate=useNavigate();
    const {state}=useContext(ProfileContext);
    const {currentUser}=state;
    return (
        <div className={styles[`profile-card`]}>
            <img className={styles[`profile-img`]} src="https://i0.wp.com/wallpapercave.com/wp/wp9174830.jpg" 
            alt=""
            width={76}
            height={76}/>
            <header className={styles['profile-card-header']} onClick={()=>navigate(`/profile/${currentUser?.username}`)}>
                <strong>{currentUser?.name}</strong>
                <span>@{currentUser?.username}</span>
            </header>
            <FontAwesomeIcon icon={faEllipsis} className={styles.ellipsis} />
        </div>
    )
}