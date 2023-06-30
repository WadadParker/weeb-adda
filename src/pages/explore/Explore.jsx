import styles from "src/pages/home/home.module.css";
import { useContext, useEffect } from "react";
import { PostContext } from "src/context/PostContext";
import { ProfileContext } from "src/context/ProfileContext";

import {Sidebar} from "src/components/sidebar/sidebar.jsx";
import { SearchBar } from "src/components/searchbar/SearchBar";
import { FilterBar } from "src/components/filterbar/FilterBar";
import {PostCard} from "src/components/postcard/PostCard.jsx";

export const Explore=()=>
{
    const {state:{userPosts},sortedPosts}=useContext(PostContext);
    const {state:{currentUser}}=useContext(ProfileContext);

    useEffect(()=>{ 
        window.scrollTo(0, 0)
   },[])

    return (
        <div className={styles[`home-container`]}>
            <Sidebar />
            <ul className={styles[`posts-list-container`]}> 
                <h1 className={styles.explore}>Explore</h1>
                <FilterBar />
                    {sortedPosts(userPosts)?.map(item=>{
                        const {_id}=item;
                        return (
                            <li key={_id} className={styles[`post-list-item`]}>
                                {item?.username===currentUser?.username
                                ?<PostCard post={item} isCurrentUser={true}/>
                                :<PostCard post={item} username={item?.username} isCurrentUser={false}/>}
                            </li>
                        )
                    })}
                </ul>
            <SearchBar />
        </div>
    )
}