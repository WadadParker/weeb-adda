import {Sidebar} from "src/components/sidebar/sidebar.jsx";

import styles from "src/pages/home/home.module.css";

export const Home=()=>
{
    return (
        <div className={styles[`home-container`]}>
            <Sidebar />
        </div>
    )
}