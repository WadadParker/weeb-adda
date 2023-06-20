import styles from "./profile.module.css";

import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import { ProfilePage } from "src/components/profilePage/ProfilePage";
import { SearchBar } from "src/components/searchbar/SearchBar";
export const Profile=()=>
{
    return (
        <div className={styles[`profile-container`]}>
        <Sidebar />
        <ProfilePage />
        <SearchBar />
        </div>
    )
}