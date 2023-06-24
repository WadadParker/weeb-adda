import styles from "./createPost.module.css";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage,faComment, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile, faBookmark } from "@fortawesome/free-regular-svg-icons";

import {ProfileContext} from "src/context/ProfileContext"

export const CreatePost=()=>
{
    const {state:{currentUser}}=useContext(ProfileContext);
    return (
        <div className={styles[`create-post-container`]}>
            <img className={styles.img} src={currentUser?.avatar} alt="pfp" width={100} height={100}/>
            <textarea className={styles.input} placeholder="Nani ga okotte iru?"></textarea>
            <footer className={styles.footer}>
                <main>
                    <FontAwesomeIcon icon={faImage} className={styles.icon}/>
                    <FontAwesomeIcon icon={faFaceSmile} className={styles.icon}/>
                </main>
                <button className={styles.post}>Post</button>
            </footer>
        </div>
    )
}