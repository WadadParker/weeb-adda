import styles from "./profile.module.css";
import { useContext } from "react";

import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import { ProfilePage } from "src/components/profilePage/ProfilePage";
import { SearchBar } from "src/components/searchbar/SearchBar";
import { ProfileContext } from "src/context/ProfileContext";
export const Profile=()=>
{
    const {state}=useContext(ProfileContext);
    const {currentUser}=state;
    return (
        <div className={styles[`profile-container`]}>
        <Sidebar />
        <ProfilePage user={currentUser}/>
        <SearchBar />
        </div>
    )
}