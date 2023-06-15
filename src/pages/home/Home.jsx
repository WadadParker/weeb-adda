import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import {PostCard} from "src/components/postcard/PostCard.jsx";

import styles from "src/pages/home/home.module.css";

export const Home=()=>
{
    return (
        <div className={styles[`home-container`]}>
            <Sidebar />
            <ul className={styles[`posts-list-container`]}>
                <li className={styles[`post-list-item`]}><PostCard /></li>
                <li className={styles[`post-list-item`]}><PostCard /></li>
            </ul>
        </div>
    )
}