import styles from "./loginPage.module.css";
import { useContext, useState } from "react";

import { Loader } from "src/components/loader/Loader";
import { AuthContext } from "src/context/AuthContext";
import {CustomToast} from 'src/components/toaster/CustomToast';

export const LoginPage=()=>
{
    const {isLoggedIn,authState,dispatch,loginHandler}=useContext(AuthContext);
    const {login:{username,password}}=authState;
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
            <nav className={styles.nav}>
                <h1 className={styles.weeb}>Weeb </h1>
                <Loader />
                <h1 className={styles.adda}> Adda</h1>
            </nav>
            <header className={styles.header}>
                
                <main className={styles[`login-container`]}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={username} onChange={(e)=>dispatch({type:"LOGIN_FIELDS",payload:e.target.value,inputField:"username"})}></input>

                    <label htmlFor="password">Enter Password</label>
                    <input type="password" id="password" value={password} onChange={(e)=>dispatch({type:"LOGIN_FIELDS",payload:e.target.value,inputField:"password"})}></input>

                    <button onClick={()=>loginHandler(showToast)}>Login</button>
                    <button onClick={()=>dispatch({type:"GUEST_LOGIN"})}>Enter Guest Credentials</button>

                    <a href="/signup">Create new account</a>
                </main>
            </header>
        </div>
    )
}