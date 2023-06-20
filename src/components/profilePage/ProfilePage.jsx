import styles from "./profilePage.module.css";
import styles_list from "src/pages/home/home.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import {PostCard} from "src/components/postcard/PostCard.jsx";

export const ProfilePage=()=>
{
    return (
        <div className={styles[`profilePage-container`]}>
            <img className={styles.coverimg} alt="" src="https://i.pinimg.com/originals/07/ae/16/07ae16b891cd997f2e2f45e597a52ef5.jpg"  height={300}/>
            <header className={styles[`profile-header-container`]}>
                <img className={styles.pfp} alt="" src="https://i.pinimg.com/originals/98/c0/83/98c08367933f07c451a18c4507f011a5.jpg" width={150} height={150}/>
                <button className={styles[`edit-button`]}>Edit Profile</button>
                <main className={styles.main}>
                    <strong>Wadad Parker</strong>
                    <span>@wadadparker</span>
                </main>
            </header>
            <footer className={styles[`footer-container`]}>
                <p>Ek "haath chhodiye samose jal jaenge" wala moment toh may bhi deserve karta hun {`>_<`}</p>
                <a href="" target="_blank"> <FontAwesomeIcon icon={faGlobe} />  Website</a>
                <p>0 Posts | 0 Following | 0 Followers</p>
            </footer>    
            <button className={styles[`logout-button`]}>Logout</button>
            <hr className={styles.hr}/>
            <h1>Posts</h1>

            <ul className={styles_list[`posts-list-container`]}>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                    <li className={styles_list[`post-list-item`]}><PostCard /></li>
                </ul>


        </div>
    )
}