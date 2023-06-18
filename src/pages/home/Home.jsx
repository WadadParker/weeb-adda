import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import {PostCard} from "src/components/postcard/PostCard.jsx";
import { FilterBar } from "src/components/filterbar/FilterBar";
import { SearchBar } from "src/components/searchbar/SearchBar";

import styles from "src/pages/home/home.module.css";

export const Home=()=>
{
    return (
        <div className={styles[`home-container`]}>
            <Sidebar />
                <ul className={styles[`posts-list-container`]}>
                <FilterBar />
                    <li className={styles[`post-list-item`]}><PostCard /></li>
                    <li className={styles[`post-list-item`]}><PostCard /></li>
                </ul>
            <SearchBar />    
        </div>
    )
}