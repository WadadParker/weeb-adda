import styles from "./loginPage.module.css";
import { useContext } from "react";

import logo from "src/assets/background.jpg";
import { AuthContext } from "src/context/AuthContext";

export const LoginPage=()=>
{
    const {isLoggedIn,authState,dispatch,loginHandler}=useContext(AuthContext);
    const {login:{username,password}}=authState;

    return (
        <div className={styles[`landing-page-container`]}>
            
            <header className={styles.header}>
                <h1 style={{fontSize:"7rem",margin:"0"}}>Weeb Adda</h1>
                <main className={styles[`login-container`]}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={username} onChange={(e)=>dispatch({type:"LOGIN_FIELDS",payload:e.target.value,inputField:"username"})}></input>

                    <label htmlFor="password">Enter Password</label>
                    <input type="password" id="password" value={password} onChange={(e)=>dispatch({type:"LOGIN_FIELDS",payload:e.target.value,inputField:"password"})}></input>

                    <button onClick={()=>loginHandler()}>Login</button>
                    <button onClick={()=>dispatch({type:"GUEST_LOGIN"})}>Enter Guest Credentials</button>

                    <a href="/signup">Create new account</a>
                </main>
            </header>
            <img alt="" src={logo} className={styles.img}/>
        </div>
    )
}