import styles from "./editUser.module.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";
import { Avatars } from "src/assets/avatars/Avatars";

export const EditUser=()=>
{
    const {avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8}=Avatars;
    const {dispatch}=useContext(ProfileContext);
    return (
        <div className={styles.modal}>
            <div className={styles[`form-container`]}>
                <header className={styles.header}>
                <FontAwesomeIcon icon={faXmark} className={styles.icon}/>
                    <h2>Edit Profile</h2>
                    <button onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:false})}>Submit</button>
                </header>
                <img className={styles.coverimg} alt="" src="https://i.pinimg.com/originals/07/ae/16/07ae16b891cd997f2e2f45e597a52ef5.jpg"  height={200}/>
                <img className={styles.pfp} alt="" src="https://i.pinimg.com/originals/98/c0/83/98c08367933f07c451a18c4507f011a5.jpg" width={120} height={120}/>
                <h2 className={styles.heading}>Choose Avatar</h2>
                <div className={styles[`avatar-container`]}>
                    <img alt="" src={avatar1} width={100} height={100} className={styles.avatar}/>
                    <img alt="" src={avatar2} width={100} height={100} className={styles.avatar}/>
                    <img alt="" src={avatar3} width={100} height={100} className={styles.avatar}/>
                    <img alt="" src={avatar4} width={100} height={100} className={styles.avatar}/>
                    <img alt="" src={avatar5} width={100} height={100} className={styles.avatar}/>
                    <img alt="" src={avatar6} width={100} height={100} className={styles.avatar}/>
                    <img alt="" src={avatar7} width={100} height={100} className={styles.avatar}/>
                    <img alt="" src={avatar8} width={100} height={100} className={styles.avatar}/>
                </div>
                <br />
                <main className={styles.main}>
                    <label>Bio</label>
                    <input className={styles.bio}></input>
                </main>
                <footer className={styles.main}>
                    <label>Website</label>
                    <input className={styles.bio}></input>
                </footer>
            </div>
        </div>
    )
}