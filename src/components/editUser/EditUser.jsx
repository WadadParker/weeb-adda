import styles from "./editUser.module.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";

export const EditUser=()=>
{
    const {showModal,dispatch}=useContext(ProfileContext);
    return (
        <div className={styles.modal}>
            <div className={styles[`form-container`]}>
                <header className={styles.header}>
                <FontAwesomeIcon icon={faXmark} className={styles.icon}/>
                    <h2>Edit Profile</h2>
                    <button onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:false})}>Submit</button>
                </header>
                <main>
                <img className={styles.coverimg} alt="" src="https://i.pinimg.com/originals/07/ae/16/07ae16b891cd997f2e2f45e597a52ef5.jpg"  height={300}/>
                </main>
            </div>
        </div>
    )
}