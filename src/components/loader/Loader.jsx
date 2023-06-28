import logo from "src/assets/one-piece-logo.jpg";
import styles from "./loader.module.css";

export const Loader=()=>
{
    return (
        <div className={styles.loader}>
            <img src={logo} alt="Loading" width={200} height={200} />
        </div>
    )
}