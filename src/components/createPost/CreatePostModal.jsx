import styles from "./createPost.module.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { PostContext } from "src/context/PostContext";

import { CreatePost } from "./CreatePost";
export const CreatePostModal=()=>
{
    const {state:{modalContent},dispatch}=useContext(PostContext);
    return (
        <div className={styles.modal}>
            <main className={styles[`post-modal-container`]}>
            <CreatePost showModal={true} content={modalContent}/>
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} onClick={()=>dispatch({type:"TOGGLE_POST_MODAL",payload:false})}/>
            </main>
        </div>
    )
}