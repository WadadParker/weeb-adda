import styles from "src/pages/home.module.css";

export const Home=()=>
{
    return (
        <div>
            <h1><span className={styles.hello}>Hello</span>, absolute paths are working!!</h1>
            <h2 className={styles.heading}>CSS modules is also installed!</h2>
        </div>
    )
}