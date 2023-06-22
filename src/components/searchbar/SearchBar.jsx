import styles from "src/components/searchbar/searchBar.module.css"

import {ProfileCard} from "src/components/profileCard/profileCard.jsx";
import {FollowerCard} from "src/components/followerCard/FollowerCard.jsx";

export const SearchBar=()=>
{
    return (
        <div className={styles[`search-users-container`]}>
            <input type="search" placeholder="search users" className={styles.input}/>
            <ul className={styles[`suggested-users-list`]}>
                <li> <FollowerCard /> </li>
                <li> <FollowerCard /> </li>
                <li> <FollowerCard /> </li>
            </ul>
        </div>
    )
}