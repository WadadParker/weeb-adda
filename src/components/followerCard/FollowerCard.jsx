import styles from "./followerCard.module.css";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const FollowerCard=()=>
{
    const navigate=useNavigate();
    return (
        <div className={styles[`profile-card`]}>
            <img className={styles[`profile-img`]} src="https://i0.wp.com/wallpapercave.com/wp/wp9174830.jpg" 
            alt=""
            width={76}
            height={76}/>
            <header className={styles['profile-card-header']} onClick={()=>navigate("/profile/wadadparker")}>
                <strong>Wadad Parker</strong>
                <span>@wadadparker</span>
            </header>
            <button className={styles.follow}>Follow</button>
        </div>
    )
}