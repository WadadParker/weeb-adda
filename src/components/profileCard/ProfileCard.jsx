import styles from "/src/components/profileCard/profileCard.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const ProfileCard=()=>
{
    return (
        <div className={styles[`profile-card`]}>
            <img className={styles[`profile-img`]} src="data:image/jpeg;base64,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" 
            alt=""
            width={76}
            height={76}/>
            <header className={styles['profile-card-header']}>
                <strong>Wadad Parker</strong>
                <span>@wadadparker</span>
            </header>
            <FontAwesomeIcon icon={faEllipsis} className={styles.ellipsis} />
        </div>
    )
}