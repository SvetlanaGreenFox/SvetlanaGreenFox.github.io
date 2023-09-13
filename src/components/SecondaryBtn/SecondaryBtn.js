import styles from "./SecondaryBtn.module.scss";
import arrow from "../../img/arrow.svg";

const SecondaryBtn = (props) => {
    return ( 
        <button className={ styles["secondary-btn"] }>
            { props.text }
            {/* <img src={ arrow } alt="Arrow" className={ styles["btn__arrow"]} /> */}
        </button>
     );
}
 
export default SecondaryBtn;