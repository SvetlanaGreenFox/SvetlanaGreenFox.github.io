import { NavLink } from "react-router-dom";

import styles from "./Project.module.scss";

const Project = ({ project, index }) => {
    const { title, img } = project;
    console.log(index);
    return (
        <NavLink to={`/project/${index}`}>
            <li className={ styles.project }>
                <h3 className={ styles["project__title"] }>{title}</h3>
                <img className={ styles["project__img"] } src={img} alt=""/>
            </li>
        </NavLink> 
        
    );
}
 
export default Project;