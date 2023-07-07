import styles from "src/pages/home/home.module.css";

import { useContext, useEffect } from "react";
import { PostContext } from "src/context/PostContext";
import { ProfileContext } from "src/context/ProfileContext";

import { Sidebar } from "src/components/sidebar/Sidebar";
import { SearchBar } from "src/components/searchbar/SearchBar";
import {PostCard} from "src/components/postcard/PostCard";

export const Bookmark=()=>
{
    const {state:{currentUser,bookmarks}}=useContext(ProfileContext);
    const {state:{userPosts}}=useContext(PostContext);

    const bookmarkedPosts=bookmarks.map(item=> [...userPosts].find(({_id})=>_id===item?._id));
    
    useEffect(()=>{ 
        window.scrollTo(0, 0)
   },[])

    return (
        <div className={`${styles[`home-container`]} ${styles[`bookmark-container`]}`}>
            <Sidebar />
            <ul className={styles[`posts-list-container`]}> 
                <h1 className={styles.bookmark}>Bookmarks</h1>
                    {bookmarkedPosts.length===0
                    ? <h1 className={styles[`empty-boomarks`]}>You have no <span className={styles.noEnemies}>enemies</span> Bookmarks</h1>
                    : bookmarkedPosts?.map(item=>{
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