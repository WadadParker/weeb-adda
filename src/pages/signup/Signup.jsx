import styles from "./signup.module.css";
import logo from "src/assets/one-piece-logo.jpg";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthContext } from "src/context/AuthContext";

export const Signup=()=>
{
    const {authState,dispatch}=useContext(AuthContext);
    const {signup:{name,username,email,password,confirmPassword}}=authState;
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
                    <input id="name" placeholder="Wadad Parker" value={name} onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"name"})}></input>
                    </div>

                    <div className={styles[`input-field-container`]}>
                    <label htmlFor="username" value={username}>Username</label>
                    <input id="username" placeholder="wadadparker" onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"username"})}></input>
                    </div>

                    <div className={styles[`input-field-container`]}>
                    <label htmlFor="email" value={email} >Email Address</label>
                    <input id="label" placeholder="wadad@gmail.com" onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"email"})}></input>
                    </div>

                    <div className={`${styles[`password-field-container`]} ${styles.password}`}>
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" id="password" value={password} onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"password"})}></input>
                    <FontAwesomeIcon icon={faEye} className={styles.icon} />
                    </div>    

                    <div className={styles[`password-field-container`]}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" value={confirmPassword} onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"confirmPassword"})}></input>
                    <FontAwesomeIcon icon={faEyeSlash} className={styles.icon}/>
                    </div>

                    <button className={styles[`signup-button`]}>Signup</button>
                    <a href="/">Already have an account</a>
            </main>
        </div>
    )
}