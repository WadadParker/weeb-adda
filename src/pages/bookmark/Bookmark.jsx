import styles from "./bookmark.module.css";

import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import { SearchBar } from "src/components/searchbar/SearchBar";

export const Bookmark=()=>
{
    return (
        <div>
            <Sidebar />
            This is Bookmark Page;
            <SearchBar />
        </div>
    )
}