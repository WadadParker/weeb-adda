import styles from "./profilePage.module.css";
import styles_list from "src/pages/home/home.module.css";
import { useContext, useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import {PostCard} from "src/components/postcard/PostCard.jsx";
import { AuthContext } from "src/context/AuthContext";
import { ProfileContext } from "src/context/ProfileContext";
import { PostContext } from "src/context/PostContext";
import { EditUser } from "src/components/editUser/EditUser";
import {Loader} from "src/components/loader/Loader";

export const ProfilePage=({user,isCurrentUser})=>
{
    const [isLoading,setIsLoading]=useState(false);
    const {logoutHandler}=useContext(AuthContext);
    const {state,dispatch,findIfFollowing,followUser,unfollowUser}=useContext(ProfileContext);
    const {showModal,currentUser}=state;
    const {state:{allPostsOfUser,userPosts},getPostsOfUser}=useContext(PostContext);

    const currentUserPosts=[...userPosts].filter(({username})=>username===user?.username);

    // useEffect(() => {
    //        getPostsOfUser(user?.username)
    //        .then(()=> setIsLoading(false))    
    //   }, [user?.username,allPostsOfUser]);

    return (<>
        {showModal && <EditUser />}
        <div className={styles[`profilePage-container`]}>
            
            <img className={styles.coverimg} alt="" src="https://i.pinimg.com/originals/07/ae/16/07ae16b891cd997f2e2f45e597a52ef5.jpg"  height={300}/>
            <header className={styles[`profile-header-container`]}>
                <img className={styles.pfp} alt="" src={isCurrentUser?currentUser?.avatar:user?.avatar} width={150} height={150}/>

                {isCurrentUser
                ?<button className={styles[`edit-button`]} onClick={()=>dispatch({type:"OPEN_EDIT_PROFILE"})}>Edit Profile</button>
                :findIfFollowing(user?.username,currentUser)
                ?<button className={styles[`unfollow-button`]} onClick={()=>unfollowUser(user?._id)}>Unfollow</button>
                :<button className={styles[`follow-button`]} onClick={()=>followUser(user?._id)}>Follow</button>}
                <main className={styles.main}>
                    <strong>{user?.name}</strong>
                    <span>@{user?.username}</span>
                </main>
            </header>
            
            <footer className={styles[`footer-container`]}>
                <p>{user?.bio}</p>
                <a href={`https://${user?.website}`} target="_blank"> <FontAwesomeIcon icon={faGlobe} />  Website</a>
                {isCurrentUser
                ?<p>{currentUserPosts.length} Posts | {currentUser?.following.length} Following | {currentUser?.followers.length} Followers</p>
                :<p>{currentUserPosts.length} Posts | 0 Following | 0 Followers</p>}
            </footer>    
            {isCurrentUser && <button className={styles[`logout-button`]} onClick={logoutHandler}>Logout</button>}
            <hr className={styles.hr}/>
            <h1>Posts</h1>

            <ul className={styles_list[`posts-list-container`]}>
                {currentUserPosts.map(item=>{
                    const {_id}=item;
                    return (
                        <li key={_id} className={styles_list[`post-list-item`]}>
                            {isCurrentUser
                            ?<PostCard post={item} isCurrentUser={true}/>
                            :<PostCard post={item} username={user?.username}/>}
                        </li>
                    )
                })}
                </ul>

        </div>
        </>
    )
}