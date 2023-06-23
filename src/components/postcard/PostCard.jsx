import styles from "src/components/postcard/postCard.module.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faComment, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { ProfileContext } from "src/context/ProfileContext";

export const PostCard=({post})=>
{
    const {state:{currentUser}}=useContext(ProfileContext);
    return (
        <div className={styles[`postcard-container`]}>
            <header className={styles[`postcard-header-container`]}>
                <img className={styles.img} src={currentUser?.avatar} alt="" width={100} height={100} />
                <span className={styles[`header-name`]}>
                    <strong>{currentUser?.username}</strong>
                    <small>{post?.updatedAt}</small>
                </span>
                <FontAwesomeIcon icon={faEllipsis} className={styles.icon}/>
            </header>
            <p>{post?.content}
            </p>
            <footer className={styles[`postcard-footer`]}>
                <span>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon} />
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