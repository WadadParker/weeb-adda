import { useContext } from "react";
import { PostContext } from "src/context/PostContext";
import { ProfileContext } from "src/context/ProfileContext";

import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import {PostCard} from "src/components/postcard/PostCard.jsx";
import { FilterBar } from "src/components/filterbar/FilterBar";
import { SearchBar } from "src/components/searchbar/SearchBar";
import { CreatePost } from "src/components/createPost/CreatePost";

import styles from "src/pages/home/home.module.css";

export const Home=()=>
{
    const {state:{userPosts}}=useContext(PostContext);
    const {state:{currentUser}}=useContext(ProfileContext);

    return (
        <div className={styles[`home-container`]}>
            <Sidebar />
                <ul className={styles[`posts-list-container`]}>
                <CreatePost showModal={false}/>    
                <FilterBar />
                    {userPosts?.map(item=>{
                        const {_id}=item;
                        return (
                            <li key={_id} className={styles[`post-list-item`]}>
                                <PostCard post={item}/>
                            </li>
                        )
                    })}
                    <li className={styles[`post-list-item`]}><PostCard /></li>
                    <li className={styles[`post-list-item`]}><PostCard /></li>
                </ul>
            <SearchBar />    
        </div>
    )
}