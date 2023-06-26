import styles from "src/components/postcard/postCard.module.css";
import {useState} from "react";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical,faComment, faShareNodes, faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import {faHeart as heart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";
import { PostContext } from "../../context/PostContext";

export const PostCard=({post})=>
{
    const [showModal,setShowModal]=useState(false);
    const {state:{currentUser}}=useContext(ProfileContext);
    const {dispatch,deletePost,likePost,dislikePost,foundIfLiked}=useContext(PostContext);

    const editClickHandler=()=>
    {
        dispatch({type:"EDIT_POST",payload:{content:post?.content,currentPost:post}});
        setShowModal(false);
    }
    const deleteClickHandler=()=>
    {
        deletePost(post?._id);
        setShowModal(false);
    }

    return (
        <div className={styles[`postcard-container`]}>
            <header className={styles[`postcard-header-container`]}>
                <img className={styles.img} src={currentUser?.avatar} alt="" width={100} height={100} />
                <span className={styles[`header-name`]}>
                    <strong>{currentUser?.name}</strong>
                    <small>{post?.createdAt}</small>
                </span>
                {showModal && <div className={styles.modal}>
                    <FontAwesomeIcon icon={faPenToSquare} className={styles[`edit-icon`]}/> 
                    <span className={styles[`edit-icon-text`]} onClick={editClickHandler}>Edit</span>
                    <FontAwesomeIcon icon={faTrash} className={styles[`delete-icon`]}/>
                    <span className={styles[`delete-icon-text`]} onClick={deleteClickHandler}>Delete</span>
                </div>}
                <FontAwesomeIcon icon={faEllipsisVertical} style={showModal?{color:"#646cff"}:{color:""}} className={styles.icon} onClick={()=>setShowModal(prev=>!prev)}/>
            </header>
            <p>{post?.content}
            </p>
            <footer className={styles[`postcard-footer`]}>
                <span>

                    {foundIfLiked(post?.likes?.likedBy,currentUser?.username)
                    ?<FontAwesomeIcon icon={heart} className={styles.heart} onClick={()=>dislikePost(post?._id)}/>
                    :<FontAwesomeIcon icon={faHeart} className={styles.icon} onClick={()=>likePost(post?._id)}/>}
                    <small>{post?.likes?.likeCount}</small>
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} className={styles.icon} />
                    <small>2</small>
                </span>
                <FontAwesomeIcon icon={faShareNodes} className={styles.icon} />
                <FontAwesomeIcon icon={faBookmark} className={styles.icon} />
            </footer>
        </div>
    )
}