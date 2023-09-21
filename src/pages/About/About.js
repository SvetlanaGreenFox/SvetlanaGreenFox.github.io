import styles from "./About.module.scss";
import Blockquote from "../../components/Blockquote/Blockquote";
import classNames from "classnames";

const About = () => {
    return (
        <main className={styles.about}>
            <div className={styles.container}>
                <div className={styles["about__content"]}>
                    <h1 className={classNames(styles["title-2"], styles["about__title"])}>Обо мне</h1>
                    <div className={styles.about__description}>
                        <div className={styles["description-item"]}>
                            <p>
                                <span className={styles["text--break"]}>Привет! Меня зовут Света.</span> 
                                <br />
                                Я начинающий Frontend-разработчик.
                                <br />
                                Я люблю красивые и удобные интерфейсы.
                                Меня вдохновляет создавать сервисы, которые полезны людям.
                                Я много учусь, чтобы расширить арсенал своих инструментов.
                                <Blockquote quote="Теория без практики мертва, практика без теории – слепа" />
                                Большую чаcть моей жизни занимает спорт.
                                Люблю бег, йогу, воркаут площадки и каратэ.
                                Тренировки позволяют мне поддерживать высокий уровень энергии и дисциплины.
                                <Blockquote quote="Дисциплина - это не ограничение свободы. Это отсечение всего лишнего." />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;