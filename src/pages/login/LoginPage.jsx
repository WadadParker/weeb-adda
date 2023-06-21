import styles from "./loginPage.module.css";

import logo from "src/assets/background.jpg";

export const LoginPage=()=>
{
    return (
        <div className={styles[`landing-page-container`]}>
            
            <header className={styles.header}>
                <h1 style={{fontSize:"7rem",margin:"0"}}>Weeb Adda</h1>
                <main className={styles[`login-container`]}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username"></input>

                    <label htmlFor="password">Enter Password</label>
                    <input type="password" id="password"></input>
                    <button>Login</button>
                    <button>Enter Guest Credentials</button>

                    <a href="/signup">Create new account</a>
                </main>
            </header>
            <img alt="" src={logo} className={styles.img}/>
        </div>
    )
}