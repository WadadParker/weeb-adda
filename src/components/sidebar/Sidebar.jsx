import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faMagnifyingGlass, faBookmark,faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "src/components/sidebar/sideBar.module.css";

import { ProfileCard } from "src/components/profileCard/ProfileCard";

export const Sidebar=()=>
{
    return (
        <div className={styles[`sidebar-container`]}>
        <header className={styles[`sidebar-icons-container`]}>
            <FontAwesomeIcon icon={faHouse} />
            <Link to="/home">Home</Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Link>Explore</Link>
            <FontAwesomeIcon icon={faBookmark} />
            <Link>Bookmark</Link>
            <FontAwesomeIcon icon={faUser} />
            <Link>Profile</Link>
            <button className={styles[`new-post-button`]}>Create New Post</button>
        </header>
        <ProfileCard />
        </div>
    )
}