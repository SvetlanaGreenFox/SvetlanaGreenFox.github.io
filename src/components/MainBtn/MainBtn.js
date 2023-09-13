import styles from "./MainBtn.module.scss";

import arrow from "../../img/arrow.svg";

const MainBtn = (props) => {
    return ( 
        <button className={ styles["main-btn"]}>
            { props.text }
            <img src={ arrow } alt="Arrow" className={ styles["btn__arrow"]} />
        </button>
     );
}
 
export default MainBtn;