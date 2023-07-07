import styles from "./createPost.module.css";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile, faBookmark } from "@fortawesome/free-regular-svg-icons";

import {ProfileContext} from "src/context/ProfileContext"
import { PostContext } from "src/context/PostContext";

export const CreatePost=({showModal,content})=>
{
    const {state:{currentUser}}=useContext(ProfileContext);
    const {state:{editPostFlag},dispatch,createNewPost,editPost}=useContext(PostContext);
    
    const changeHandler=(e)=>
    {
        showModal
        ? dispatch({type:"UPDATE_MODAL_CONTENT",payload:e.target.value})
        : dispatch({type:"UPDATE_CONTENT",payload:e.target.value})
    }
    const clickHandler=()=>
    {
        if(editPostFlag)
        {
            editPost(content);
        }
        else {
        createNewPost(content);
        showModal
        ? dispatch({type:"UPDATE_MODAL_CONTENT",payload:''})
        : dispatch({type:"UPDATE_CONTENT",payload:''})
        }
    }

    return (
        <div className={showModal?styles[`create-post-modal`]:styles[`create-post-container`]}>
            <img className={styles.img} src={currentUser?.avatar} alt="pfp" width={100} height={100}/>
            <textarea rows={5} cols={15} value={content} className={styles.input} placeholder="Nani ga okotte iru?" onChange={(e)=>changeHandler(e)}></textarea>
            <footer className={styles.footer}>
                <main>
                    <FontAwesomeIcon icon={faImage} className={styles.icon}/>
                    <FontAwesomeIcon icon={faFaceSmile} className={styles.icon}/>
                </main>
                <button disabled={content.length===0} className={styles.post} onClick={clickHandler}>{editPostFlag?"Update":"Post"}</button>
            </footer>
        </div>
    )
}