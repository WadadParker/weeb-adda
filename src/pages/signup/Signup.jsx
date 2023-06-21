import styles from "./signup.module.css";
import logo from "src/assets/one-piece-logo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export const Signup=()=>
{
    return (
        <div className={styles[`landing-page-container`]}>
            <header className={styles.header}>
                <h1>Weeb Adda</h1>
                <img alt="" src={logo} width={150} height={150}/>
            </header>
            <main className={styles[`signup-container`]}>
                <h2>Signup</h2>
                    <div className={styles[`input-field-container`]}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" placeholder="Wadad Parker"></input>
                    </div>

                    <div className={styles[`input-field-container`]}>
                    <label htmlFor="username">Username</label>
                    <input id="username" placeholder="wadadparker"></input>
                    </div>

                    <div className={styles[`input-field-container`]}>
                    <label htmlFor="email">Email Address</label>
                    <input id="label" placeholder="wadad@gmail.com"></input>
                    </div>

                    <div className={`${styles[`password-field-container`]} ${styles.password}`}>
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" id="password"></input>
                    <FontAwesomeIcon icon={faEye} className={styles.icon} />
                    </div>    

                    <div className={styles[`password-field-container`]}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password"></input>
                    <FontAwesomeIcon icon={faEyeSlash} className={styles.icon}/>
                    </div>


                    <button className={styles[`signup-button`]}>Signup</button>
                    <a href="/login">Already have an account</a>
            </main>
        </div>
    )
}