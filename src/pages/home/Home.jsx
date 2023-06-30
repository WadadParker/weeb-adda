import { useContext, useEffect } from "react";
import { PostContext } from "src/context/PostContext";
import { ProfileContext } from "src/context/ProfileContext";

import { Sidebar } from "src/components/sidebar/Sidebar";
import {PostCard} from "src/components/postcard/PostCard";
import { FilterBar } from "src/components/filterbar/FilterBar";
import { SearchBar } from "src/components/searchbar/SearchBar";
import { CreatePost } from "src/components/createPost/CreatePost";

import styles from "src/pages/home/home.module.css";

export const Home=()=>
{
    const {state:{userPosts,content},sortedPosts}=useContext(PostContext);
    const {state:{currentUser}}=useContext(ProfileContext);

    const followingUsers = userPosts.filter(user => currentUser?.following.some(followedUser => followedUser.username === user.username || user.username===currentUser?.username));
  
    useEffect(()=>{ 
        window.scrollTo(0, 0)
   },[])

    return (
        <div className={styles[`home-container`]}>
            <Sidebar />
                <ul className={styles[`posts-list-container`]}>
                <CreatePost showModal={false} content={content}/>    
                <FilterBar />
                    {sortedPosts(followingUsers)?.map(item=>{
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