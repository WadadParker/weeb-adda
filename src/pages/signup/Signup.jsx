import styles from "./signup.module.css";
import {CustomToast} from 'src/components/toaster/CustomToast';
import { useContext, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthContext } from "src/context/AuthContext";
import { Loader } from "src/components/loader/Loader";

export const Signup=()=>
{
    const {authState,dispatch,signupHanlder,checkAllFields}=useContext(AuthContext);
    const {signup:{name,username,email,password,confirmPassword},displayPassword,displayConfirmPassword}=authState;

    const [toastMessage, setToastMessage] = useState(null);

    const showToast = (message, type) => {
        setToastMessage({ message, type });
        setTimeout(() => {
          setToastMessage(null);
        }, 3000);
      };
      
    return (
        <div className={styles[`landing-page-container`]}>

            {toastMessage && (
            <CustomToast message={toastMessage.message} type={toastMessage.type} />
            )}

            <header className={styles.header}>
                <h1>Weeb </h1>
                <Loader />
                <h1 className={styles.adda}> Adda</h1>
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
                    <label htmlFor="email" value={email}>Email Address</label>
                    <input id="label" placeholder="wadad@gmail.com" onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"email"})}></input>
                    </div>

                    <div className={`${styles[`password-field-container`]} ${styles.password}`}>
                    <label htmlFor="password">Enter Password</label>
                    <input type={displayPassword?"text":"password"} id="password" value={password} onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"password"})}></input>
                    {displayPassword
                    ?<FontAwesomeIcon icon={faEye} className={styles.icon} onClick={()=>dispatch({type:"TOGGLE_PASSWORD"})} />
                    :<FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={()=>dispatch({type:"TOGGLE_PASSWORD"})}/>}
                    </div>    

                    <div className={styles[`password-field-container`]}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type={displayConfirmPassword?"text":"password"} id="confirm-password" value={confirmPassword} onChange={(e)=>dispatch({type:"SIGNUP_FIELDS",payload:e.target.value,inputField:"confirmPassword"})}></input>
                    {displayConfirmPassword
                    ?<FontAwesomeIcon icon={faEye} className={styles.icon} onClick={()=>dispatch({type:"TOGGLE_CONFIRM_PASSWORD"})}/>
                    :<FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={()=>dispatch({type:"TOGGLE_CONFIRM_PASSWORD"})} />}
                    </div>

                    <button className={styles[`signup-button`]} onClick={()=>checkAllFields(showToast)}>Signup</button>
                    <a href="/">Already have an account</a>
            </main>
        </div>
    )
}