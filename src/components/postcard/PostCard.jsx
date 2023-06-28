import styles from "src/components/postcard/postCard.module.css";
import {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical,faComment, faShareNodes, faPenToSquare,faTrash,faBookmark as bookmark } from "@fortawesome/free-solid-svg-icons";
import {faHeart as heart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";
import { PostContext } from "src/context/PostContext";

export const PostCard=({post,username,isCurrentUser})=>
{
    const [showModal,setShowModal]=useState(false);
    const {state:{currentUser,bookmarks},addToBookmarks,removeFromBookmarks,findBookmark}=useContext(ProfileContext);
    const {dispatch,deletePost,likePost,dislikePost,foundIfLiked,getPostsOfUser,state:{allUsers}}=useContext(PostContext);
    const navigate=useNavigate();

    const user=[...allUsers]?.find(({username:searchedUsername})=>searchedUsername===username)

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
    const usernameClickHandler=()=>
    {
        getPostsOfUser(username);
        navigate(`/profile/${post?.username}`);
    }
    // useEffect(()=>{
    //     getPostsOfUser(username);
    // },[post?.content,post?.likes?.likeCount,bookmarks.length]);

    return (
        <div className={styles[`postcard-container`]}>
            <header className={styles[`postcard-header-container`]}>
                <img className={styles.img} src={isCurrentUser?currentUser?.avatar:user?.avatar} alt="" width={100} height={100} />
                <span className={styles[`header-name`]}>
                    <strong className={styles.name} onClick={()=>usernameClickHandler()}>{isCurrentUser?currentUser?.name:user?.name}</strong>
                    <small>{post?.createdAt}</small>
                </span>
                {isCurrentUser && <main className={styles[`icons-container`]}>
                {showModal && <div className={styles.modal}>
                    <FontAwesomeIcon icon={faPenToSquare} className={styles[`edit-icon`]}/> 
                    <span className={styles[`edit-icon-text`]} onClick={editClickHandler}>Edit</span>
                    <FontAwesomeIcon icon={faTrash} className={styles[`delete-icon`]}/>
                    <span className={styles[`delete-icon-text`]} onClick={deleteClickHandler}>Delete</span>
                </div>}
                <FontAwesomeIcon icon={faEllipsisVertical} style={showModal?{color:"#646cff"}:{color:""}} className={styles.icon} onClick={()=>setShowModal(prev=>!prev)}/>
                </main>}
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
                {findBookmark(bookmarks,post?._id)
                ?<FontAwesomeIcon icon={bookmark} className={styles.bookmark} onClick={()=>removeFromBookmarks(post?._id)}/>
                :<FontAwesomeIcon icon={faBookmark} className={styles.icon} onClick={()=>addToBookmarks(post?._id)}/>}
            </footer>
        </div>
    )
}