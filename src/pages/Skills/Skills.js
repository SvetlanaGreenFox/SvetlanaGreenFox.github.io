import styles from "./Skills.module.scss";
import classNames from "classnames";

import javaScript from "./assets/javascript.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import react from "./assets/react.svg";
import redux from "./assets/redux.svg";
import sass from "./assets/sass.svg";
import webpack from "./assets/webpack.svg";

const Skills = () => {
    return (
        <main className={styles.skills}>
            <div className={styles.container}>
                <div className={styles["skills__content"]}>
                    <div className={classNames(styles["skills__item"], styles["left-wrapper--design"])}>
                        <h3 className={styles["skills__title"]}>Hard skills</h3>
                        <div>
                            <ul className={ styles["skills-list"] }>
                                <li className={ styles["skills-list__item"] }>Опыт работы и понимание компонентного подхода React</li>
                                <li className={ styles["skills-list__item"] }>Знание чистого JavaScript</li>
                                <li className={ styles["skills-list__item"] }>Опыт работы с Redux, Redux Toolkit</li>
                                <li className={ styles["skills-list__item"] }>Опыт работы с API на базе REST</li>
                                <li className={ styles["skills-list__item"] }>Знание HTML, CSS, Sass</li>
                                <li className={ styles["skills-list__item"] }>Умение работать с Figma, Photoshop</li>
                                <li className={ styles["skills-list__item"] }>Знание методологии БЭМ</li>
                                <li className={ styles["skills-list__item"] }>Умение работать с GIT</li>
                                <li className={ styles["skills-list__item"] }>Опыт сборки Webpack</li>
                            </ul>
                        </div>
                        <div className={ styles["skills__icons"] }>
                            <ul className={ styles["icons-list"] }>
                                <li className={ styles["icons-list__item"] }>
                                    <img src={javaScript} alt="JavaScript"/>
                                </li>
                                <li className={ styles["icons-list__item"] }>
                                    <img src={html} alt="HTML"/>
                                </li>
                                <li className={ styles["icons-list__item"] }>
                                    <img src={css} alt="CSS"/>
                                </li>
                                <li className={ styles["icons-list__item"] }>
                                    <img src={react} alt="React"/>
                                </li>
                                <li className={ styles["icons-list__item"] }>
                                    <img src={redux} alt="Redux"/>
                                </li>
                                <li className={ styles["icons-list__item"] }>
                                    <img src={webpack} alt="Webpack"/>
                                </li>
                                <li className={ styles["icons-list__item"] }>
                                    <img src={sass} alt="GIT"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classNames(styles["skills__item"], styles["right-wrapper--design"])}>
                        <h3 className={classNames(styles["skills__title"])}>Soft skills</h3>
                        <div>
                            <ul className={ styles["skills-list"] }>
                                <li className={ styles["skills-list__item"] }>Адаптивность</li>
                                <li className={ styles["skills-list__item"] }>Эмпатия, Коммуникабельность</li>
                                <li className={ styles["skills-list__item"] }>Стрессоустойчивость</li>
                                <li className={ styles["skills-list__item"] }>Мотивация</li>
                                <li className={ styles["skills-list__item"] }>Целеполагание, открытость новому</li>
                                <li className={ styles["skills-list__item"] }>Критическое мышление</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Skills;