import { useParams } from "react-router-dom";

import styles from "./ProjectPage.module.scss";
import projects from "../../helpers/projectsList";
import BtnGitHub from "../../components/BtnGitHub/BtnGitHub";

import className from "classnames";

const ProjectPage = () => {
    const { id } = useParams();
    const { title, img, skills, gitHubLink } = projects[id];

    return (
        <main className={styles["project-page"]}>
            <div className={styles.container}>
                <h3 className={className(styles["title-2"], styles["project__title"])}>{title}</h3>
                <div className={styles["project-page__content"]}>
                    <img className={styles["project__img"]} src={img} alt="" />

                    <div className={styles["project-page__description"]}>
                        <p>{skills}</p>
                        <div>
                            <BtnGitHub link={gitHubLink} />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default ProjectPage;