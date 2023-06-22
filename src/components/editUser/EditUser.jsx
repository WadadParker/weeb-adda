import styles from "./editUser.module.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";
import { Avatars } from "src/assets/avatars/Avatars";

export const EditUser=()=>
{
    const {avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8}=Avatars;
    const {state,dispatch,editUserProfile}=useContext(ProfileContext);
    const {editProfile:{avatar,bio,websiteLink}}=state;

    const clickHandler=(selectedAvatar)=>
    {
        dispatch({type:"EDIT_PROFILE_FIELDS",payload:selectedAvatar,inputField:"avatar"})
    }
    return (
        <div className={styles.modal}>
            <div className={styles[`form-container`]}>
                <header className={styles.header}>
                <FontAwesomeIcon icon={faXmark} className={styles.icon} onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:false})}/>
                    <h2>Edit Profile</h2>
                    <button onClick={()=>editUserProfile()}>Submit</button>
                </header>
                <img className={styles.coverimg} alt="" src="https://i.pinimg.com/originals/07/ae/16/07ae16b891cd997f2e2f45e597a52ef5.jpg"  height={200}/>
                <img className={styles.pfp} alt="" src={avatar} width={120} height={120}/>
                <h2 className={styles.heading}>Choose Avatar</h2>
                <div className={styles[`avatar-container`]}>
                    <img alt="" src={avatar1} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar1)}/>
                    <img alt="" src={avatar2} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar2)}/>
                    <img alt="" src={avatar3} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar3)}/>
                    <img alt="" src={avatar4} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar4)}/>
                    <img alt="" src={avatar5} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar5)}/>
                    <img alt="" src={avatar6} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar6)}/>
                    <img alt="" src={avatar7} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar7)}/>
                    <img alt="" src={avatar8} width={100} height={100} className={styles.avatar} onClick={()=>clickHandler(avatar8)}/>
                </div>
                <br />
                <main className={styles.main}>
                    <label>Bio</label>
                    <input className={styles.bio} value={bio} onChange={(e)=>dispatch({type:"EDIT_PROFILE_FIELDS",payload:e.target.value,inputField:"bio"})}></input>
                </main>
                <footer className={styles.main}>
                    <label>Website</label>
                    <input className={styles.bio} value={websiteLink} onChange={(e)=>dispatch({type:"EDIT_PROFILE_FIELDS",payload:e.target.value,inputField:"websiteLink"})}></input>
                </footer>
            </div>
        </div>
    )
}