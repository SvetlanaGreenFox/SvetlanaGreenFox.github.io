import { useParams } from "react-router-dom";

import styles from "./ProjectPage.module.scss";
import projects from "../../helpers/projectsList";

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects[id];
    
    return ( 
        <main className={ styles.projects }>
            <p>{project.title}</p> 
            Hi
        </main> 
    );
}
 
export default ProjectPage;