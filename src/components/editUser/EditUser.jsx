import styles from "./editUser.module.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";

export const EditUser=()=>
{
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
                <img className={styles.pfp} alt="" src="https://i.pinimg.com/originals/98/c0/83/98c08367933f07c451a18c4507f011a5.jpg" width={100} height={100}/>
                <h2>Choose Avatar</h2>
                <div className={styles[`avatar-container`]}>
                    <img alt="" src="https://avatarfiles.alphacoders.com/349/thumb-349118.png" width={100} height={100} className={styles.avatar}/>
                    <img alt="" src="https://avatarfiles.alphacoders.com/280/thumb-280968.png" width={100} height={100} className={styles.avatar}/>
                    <img alt="" src="https://avatarfiles.alphacoders.com/280/thumb-280958.png" width={100} height={100} className={styles.avatar}/>
                    <img alt="" src="https://avatarfiles.alphacoders.com/349/thumb-349122.png" width={100} height={100} className={styles.avatar}/>
                    <img alt="" src="https://avatarfiles.alphacoders.com/280/thumb-280960.png" width={100} height={100} className={styles.avatar}/>
                    <img alt="" src="https://avatarfiles.alphacoders.com/280/thumb-280967.png" width={100} height={100} className={styles.avatar}/>
                    <img alt="" src="https://avatarfiles.alphacoders.com/280/thumb-280970.png" width={100} height={100} className={styles.avatar}/>
                    <img alt="" src="https://avatarfiles.alphacoders.com/349/thumb-349119.png" width={100} height={100} className={styles.avatar}/>
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