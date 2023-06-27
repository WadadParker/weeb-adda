import styles from "./explore.module.css";

import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import { SearchBar } from "src/components/searchbar/SearchBar";

export const Explore=()=>
{
    return (
        <div>
            <Sidebar />
            This is Explore page
            <SearchBar />
        </div>
    )
}