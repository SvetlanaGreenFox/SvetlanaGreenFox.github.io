import styles from "./Footer.module.scss";
import className from "classnames";
import { Link } from "react-router-dom";

import gitHub from "../../img/socials/gitHub.svg";
import linkedIn from "../../img/socials/linkedIn.svg";

const Footer = () => {
    return ( 
        <footer className={ styles.footer }>
            <div className={ className(styles.container, styles["footer__container"]) }>
                <div className={ styles.socials }>
                    <div className={ styles["icon-wrap"] }>
                        <Link to="https://github.com/SvetlanaGreenFox">
                            <img src={ gitHub } alt="Git Hub" className={ styles["socials__item"] }/>
                        </Link>
                    </div>
                    <div className={ styles["icon-wrap"] }>
                        <Link to="https://www.linkedin.com/in/svetlana-lisina-developer">
                            <img src={ linkedIn } alt="Git Hub" className={ styles["socials__item"] }/>
                        </Link>
                    </div>
                </div>
                <div className={styles.line}></div>
            </div>
        </footer> 
    );
}
 
export default Footer;