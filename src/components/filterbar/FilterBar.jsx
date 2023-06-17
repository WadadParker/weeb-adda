import styles from "src/components/filterbar/filterbar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFire  } from '@fortawesome/free-solid-svg-icons'

export const FilterBar=()=>
{
    return (
        <div className={styles[`filter-container`]}>
            
            <FontAwesomeIcon icon={faClock} className={styles.icon}/>
            <p className={styles.latest}>Latest </p>
            <hr />
            <FontAwesomeIcon icon={faFire} className={styles.icon}/>
            <p>Trending</p>

        </div>
    )
}