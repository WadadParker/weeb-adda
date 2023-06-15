import styles from "src/components/postcard/postCard.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faComment, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

export const PostCard=()=>
{
    return (
        <div className={styles[`postcard-container`]}>
            <header className={styles[`postcard-header-container`]}>
                <img className={styles.img} src="https://pbs.twimg.com/media/FWHSql7VUAEvAMV.jpg" alt="" width={100} height={100} />
                <span className={styles[`header-name`]}>
                    <strong>Wadad Parker</strong>
                    <small>27th May 2023</small>
                </span>
                <FontAwesomeIcon icon={faEllipsis} className={styles.icon}/>
            </header>
            <p>One Piece is the best Anime of our history. Before disagreeing
                atleast watch it once.
            </p>
            <footer className={styles[`postcard-footer`]}>
                <span>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                    <small>3</small>
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