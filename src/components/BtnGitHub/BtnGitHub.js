import styles from "./BtnGitHub.module.scss";
import icon from "../../img/socials/gitHub-blue.svg";

const BtnGitHub = ({ link }) => {
    return ( 
        <a href={link} className={styles["gh-link"]}>
            <img src={icon} alt="Link to git hub page"/>
            GitHub
        </a>
     );
}

export default BtnGitHub;