import styles from "src/components/searchbar/searchBar.module.css"

import {ProfileCard} from "src/components/profileCard/profileCard.jsx";

export const SearchBar=()=>
{
    return (
        <div className={styles[`search-users-container`]}>
            <input type="search" placeholder="search users" className={styles.input}/>
            <ul className={styles[`suggested-users-list`]}>
                <li> <ProfileCard /> </li>
                <li> <ProfileCard /> </li>
                <li> <ProfileCard /> </li>
            </ul>
        </div>
    )
}