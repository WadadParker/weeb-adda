import styles from "src/components/filterbar/filterBar.module.css";
import { useContext } from "react";
import { PostContext } from "src/context/PostContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFire  } from '@fortawesome/free-solid-svg-icons'

export const FilterBar=()=>
{
    const {state:{sortByLatest},dispatch}=useContext(PostContext);
    return (
        <div className={styles[`filter-container`]}>
            
            <FontAwesomeIcon icon={faClock} className={sortByLatest?styles[`icon-active`]:styles.icon}/>
            <p className={styles.latest} onClick={()=>dispatch({type:"TOGGLE_SORT",payload:true})}>Latest </p>
            <hr />
            <FontAwesomeIcon icon={faFire} className={sortByLatest?styles.icon:styles[`icon-active`]}/>
            <p onClick={()=>dispatch({type:"TOGGLE_SORT",payload:false})}>Trending</p>

        </div>
    )
}