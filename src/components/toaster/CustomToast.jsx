import styles from "./customToaster.module.css";

export const CustomToast=({message,type})=>
{
    return (
        <div className={`${styles[`custom-toast`]} ${styles[`${type}`]}`}>
            <span>{message}</span>
        </div>
    )
}