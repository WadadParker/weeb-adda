import styles from "./profilePage.module.css";
import styles_list from "src/pages/home/home.module.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import {PostCard} from "src/components/postcard/PostCard.jsx";
import { AuthContext } from "src/context/AuthContext";
import { ProfileContext } from "src/context/ProfileContext";
import { PostContext } from "src/context/PostContext";
import { EditUser } from "src/components/editUser/EditUser";

export const ProfilePage=({user})=>
{
    const {logoutHandler}=useContext(AuthContext);
    const {state,dispatch}=useContext(ProfileContext);
    const {showModal}=state;
    const {state:{userPosts}}=useContext(PostContext);

    return (<>
        {showModal && <EditUser />}
        <div className={styles[`profilePage-container`]}>
            
            <img className={styles.coverimg} alt="" src="https://i.pinimg.com/originals/07/ae/16/07ae16b891cd997f2e2f45e597a52ef5.jpg"  height={300}/>
            <header className={styles[`profile-header-container`]}>
                <img className={styles.pfp} alt="" src={user?.avatar} width={150} height={150}/>

                <button className={styles[`edit-button`]} onClick={()=>dispatch({type:"OPEN_EDIT_PROFILE"})}>Edit Profile</button>
                <main className={styles.main}>
                    <strong>{user?.name}</strong>
                    <span>@{user?.username}</span>
                </main>
            </header>
            
            <footer className={styles[`footer-container`]}>
                <p>{user?.bio}</p>
                <a href={user?.website} target="_blank"> <FontAwesomeIcon icon={faGlobe} />  Website</a>
                <p>0 Posts | 0 Following | 0 Followers</p>
            </footer>    
            <button className={styles[`logout-button`]} onClick={logoutHandler}>Logout</button>
            <hr className={styles.hr}/>
            <h1>Posts</h1>

            <ul className={styles_list[`posts-list-container`]}>
                {userPosts?.map(item=>{
                    const {_id}=item;
                    return (
                        <li key={_id} className={styles_list[`post-list-item`]}>
                            <PostCard post={item}/>
                        </li>
                    )
                })}
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                </ul>


        </div>
        </>
    )
}