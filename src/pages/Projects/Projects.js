import styles from "./Projects.module.scss";
import classNames from "classnames";

import Project from "../../components/Project/Project";
import projects from "../../helpers/projectsList";

const Projects = () => {
    return ( 
        <main className={ styles.projects }>
            <div className={ styles.container }>
                <div className={ styles["projects__content"] }>
                    <h1 className={classNames(styles["title-2"], styles["projects__title"])}>My Selected Projects</h1>
                    <ul className={ styles["projects-wrap"]}>
                        {projects.map((item, idx) => {
                            return <Project key={ idx } project={ item } index={ idx } />
                        })}
                    </ul>
                </div>
            </div>
        </main>
    );
}
 
export default Projects;