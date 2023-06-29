import styles from "./followerCard.module.css";
import {useContext, useRef} from "react";
import { useNavigate } from "react-router-dom";

import { ProfileContext } from "src/context/ProfileContext";

export const FollowerCard=({user})=>
{
    // const [isFollowing,setIsFollowing]=useState(false);
    const isFollowingRef = useRef(false);
    const {followUser,unfollowUser}=useContext(ProfileContext);
    const navigate=useNavigate();

    const followHandler=()=>
    {
        followUser(user?._id);
        isFollowingRef.current = true;
    }
    const unfollowHandler=()=>
    {
        unfollowUser(user?._id);
        isFollowingRef.current = false;
    }

    return (
        <div className={styles[`profile-card`]}>
            <img className={styles[`profile-img`]} src={user?.avatar}
            alt=""
            width={76}
            height={76}/>
            <header className={styles['profile-card-header']} onClick={()=>navigate(`/profile/${user?.username}`)}>
                <strong>{user?.name}</strong>
                <span>@{user?.username}</span>
            </header>
            {isFollowingRef.current
            ?<button className={styles.following} onClick={()=>unfollowHandler()}>Following</button>
            :<button className={styles.follow} onClick={()=>followHandler()}>Follow</button>}
            
        </div>
    )
}